function DaftarMateri({ materi }) {
  return (
    <ul className="daftar-materi">
      {materi.map((item) => (
        <li key={item.id} className="item-materi">
          <h2>{item.judul}</h2>
          <p className="mata-kuliah">{item.mataKuliah}</p>
          <p>Pertemuan {item.pertemuan}</p>
          {item.tautan && (
            <a href={item.tautan} target="_blank" rel="noreferrer">
              Buka
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default DaftarMateri