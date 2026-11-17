export async function ambilMateri() {
  let res
  try {
    res = await fetch(`${import.meta.env.VITE_API_URL}/materi`)
  } catch {
    throw new Error(
      'Tidak dapat terhubung ke server. Pastikan API sedang berjalan.',
    )
  }

  if (!res.ok) {
    throw new Error(`Server menjawab dengan status ${res.status}.`)
  }

  try {
    return await res.json()
  } catch {
    throw new Error('Respons server tidak dapat dibaca.')
  }
}
