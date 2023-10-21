import express from 'express'
import getAcademicYears from '../controllers/getAcademicYears.js'
import getSeccions from '../controllers/getSeccions.js'
import getSubjects from '../controllers/getSubjects.js'
import getSectionSubjects from '../controllers/getSeccionSubjects.js'
import getEvalPlan from '../controllers/evalPlan/getEvalPlan.js'
const router = express.Router()

router.get('/academicYears', async (req, res) => {
  const list = await getAcademicYears()
  res.status(200).json(list)
})

router.get('/seccions', async (req, res) => {
  const list = await getSeccions()
  res.status(200).json(list)
})

router.get('/subjects', async (req, res) => {
  const list = await getSubjects()
  res.status(200).json(list)
})

router.get('/seccion_subjects', async (req, res) => {
  const list = await getSectionSubjects(req.body)
  res.status(200).json(list)
})

router.get('/evalplan', async (req, res) => {
  const evalPlan = await getEvalPlan(req.body)
  res.status(200).json(evalPlan)
})

export default router
