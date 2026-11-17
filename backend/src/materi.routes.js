import { Router } from 'express'
import { semua } from './materi.repository.js'

const router = Router()

router.get('/', async (req, res) => {
  const daftar = await semua()
  res.status(200).json(daftar)
})

export default router
