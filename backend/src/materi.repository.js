import pool from './db.js'

export async function semua() {
  const [baris] = await pool.query(
    'SELECT id, judul, mata_kuliah, pertemuan, tautan, dibuat FROM materi ORDER BY id',
  )

  return baris.map((b) => ({
    id: b.id,
    judul: b.judul,
    mataKuliah: b.mata_kuliah,
    pertemuan: b.pertemuan,
    tautan: b.tautan ?? null,
    dibuat: b.dibuat,
  }))
}
