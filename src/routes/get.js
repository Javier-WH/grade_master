import express from 'express'
/*
import User from '../models/user/user.js'
import Period from '../models/basics/period.js'
import AcademicYears from '../models/basics/academicYears.js'
import SeccionNames from '../models/basics/seccionsName.js'
import SubjectsNames from '../models/basics/subjecName.js'
import Seccions from '../models/basics/seccion.js'
import Subjects from '../models/basics/subject.js'
import LapseName from '../models/basics/lapseName.js'
import EvaluationPlan from '../models/evaluationPlan/evaluationPlan.js'
import EvalPlanDates from '../models/evaluationPlan/evalPlanDates.js'
import EvalPlanDescription from '../models/evaluationPlan/evalPlanDescription.js'
import EvalPlanPercents from '../models/evaluationPlan/evalPlanPercents.js'
import Students from '../models/students/student.js'
import Grades from '../models/students/grade.js'
import Failed from '../models/students/failed.js'
*/
const router = express.Router()

router.get('/academicYears', async (req, res) => {
  res.status(200).send('hola')
})

router.get('/seccions', async (req, res) => {
  res.status(200).send('hola')
})

router.get('/subjects', async (req, res) => {
  res.status(200).send('hola')
})

router.get('/seccion_subjects', async (req, res) => {
  res.status(200).send('hola')
})

router.get('/evalplan', async (req, res) => {
  res.status(200).send('hola')
})

router.get('/seccion', async (req, res) => {
  res.status(200).send('hola')
})

export default router
