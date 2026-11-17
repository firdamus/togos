import pool from './db.js'

try {
  const [rows] = await pool.query(
    'SELECT VERSION() AS versi, DATABASE() AS db, CURRENT_USER() AS pengguna',
  )
  console.log('Koneksi berhasil:', rows[0])
} catch (err) {
  console.error('Koneksi gagal.')
  console.error('Kode error :', err.code)
  console.error('Pesan      :', err.message)
  process.exitCode = 1
} finally {
  await pool.end()
}
