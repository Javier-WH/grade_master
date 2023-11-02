import express from 'express'
import getStudentsBySeccionId from '../../controllers/seccion/getStudentsBySeccionId/getStudentsBySeccionId.js'
import getStudentsBySubjectId from '../../controllers/seccion/getSeccionBySubjectId/getSeccionBySubjectId.js'

const router = express.Router()

router.get('/id', getStudentsBySeccionId)
router.get('/subject', getStudentsBySubjectId)
export default router
