import express from 'express'
import getAcademicYears from '../../controllers/basic/getAcademicYeats.js'
import getLapseNames from '../../controllers/basic/getLapseNames.js'
import getPeriods from '../../controllers/basic/getPeriods.js'
import getSeccions from '../../controllers/basic/getSeccions.js'
import getSeccionNames from '../../controllers/basic/getSeccionNames.js'
import getSubjectNames from '../../controllers/basic/getSubjectNames.js'
import getSubjects from '../../controllers/basic/getSubjects.js'

const router = express.Router()

router.post('/academicYears', getAcademicYears)
router.post('/lapseNames', getLapseNames)
router.post('/periods', getPeriods)
router.post('/seccions', getSeccions)
router.post('/seccionNames', getSeccionNames)
router.post('/subjectNames', getSubjectNames)
router.post('/subjects', getSubjects)

export default router
