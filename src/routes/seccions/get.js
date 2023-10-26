import express from 'express'
import getStudentsBySeccionId from '../../controllers/seccion/getStudentsBySeccionId.js'

import User from '../../models/user/user.js'
import Period from '../../models/basics/period.js'
import AcademicYears from '../../models/basics/academicYears.js'
import SeccionNames from '../../models/basics/seccionsName.js'
import SubjectsNames from '../../models/basics/subjecName.js'
import Seccions from '../../models/basics/seccion.js'
import Subjects from '../../models/basics/subject.js'
import LapseName from '../../models/basics/lapseName.js'
import EvaluationPlan from '../../models/evaluationPlan/evaluationPlan.js'
import EvalPlanDates from '../../models/evaluationPlan/evalPlanDates.js'
import EvalPlanDescription from '../../models/evaluationPlan/evalPlanDescription.js'
import EvalPlanPercents from '../../models/evaluationPlan/evalPlanPercents.js'
import Students from '../../models/students/student.js'
import Grades from '../../models/students/grade.js'
import Failed from '../../models/students/failed.js'

const router = express.Router()

router.get('/', getStudentsBySeccionId)

export default router
