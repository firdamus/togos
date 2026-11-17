import { useEffect, useState } from 'react'
import DaftarMateri from './components/DaftarMateri.jsx'
import { ambilMateri } from './api/materi.js'
import './App.css'

function App() {
  const [materi, setMateri] = useState([])
  const [status, setStatus] = useState('memuat') // 'memuat' | 'galat' | 'siap'
  const [pesanGalat, setPesanGalat] = useState('')
  const [percobaan, setPercobaan] = useState(0)

  useEffect(() => {
    let dibatalkan = false

    ambilMateri()
      .then((data) => {
        if (dibatalkan) return
        setMateri(data)
        setStatus('siap')
      })
      .catch((err) => {
        if (dibatalkan) return
        setPesanGalat(err.message)
        setStatus('galat')
      })

    return () => {
      dibatalkan = true
    }
  }, [percobaan])

  function cobaLagi() {
    setStatus('memuat')
    setPercobaan((n) => n + 1)
  }

  return (
    <main className="halaman">
      <h1>ArsipMateri</h1>

      {status === 'memuat' && <p className="keadaan">Memuat…</p>}

      {status === 'galat' && (
        <div className="keadaan galat" role="alert">
          <p>{pesanGalat}</p>
          <button type="button" onClick={cobaLagi}>
            Coba lagi
          </button>
        </div>
      )}

      {status === 'siap' && materi.length === 0 && (
        <p className="keadaan">Belum ada materi</p>
      )}

      {status === 'siap' && materi.length > 0 && (
        <DaftarMateri materi={materi} />
      )}
    </main>
  )
}

export default App
