import express from 'express'
import getAcademicYears from '../controllers/getAcademicYears.js'
const router = express.Router()

router.get('/academicYears', async (req, res) => {
  const list = await getAcademicYears()
  res.status(200).json(list)
})

export default router
