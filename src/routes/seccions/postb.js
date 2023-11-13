import express from 'express'
import getStudentsBySeccionId from '../../controllers/seccion/getStudentsBySeccionId/getStudentsBySeccionId.js'
import getStudentsBySubjectId from '../../controllers/seccion/getSeccionBySubjectId/getSeccionBySubjectId.js'

const router = express.Router()

router.post('/id', getStudentsBySeccionId)
router.post('/subject', getStudentsBySubjectId)
export default router
