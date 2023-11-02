import express from 'express'
import getAcademicYears from '../../controllers/basic/getAcademicYeats.js'
import getLapseNames from '../../controllers/basic/getLapseNames.js'
import getPeriods from '../../controllers/basic/getPeriods.js'
import getSeccions from '../../controllers/basic/getSeccions.js'
import getSeccionNames from '../../controllers/basic/getSeccionNames.js'

const router = express.Router()

router.get('/academicYears', getAcademicYears)
router.get('/lapseNames', getLapseNames)
router.get('/periods', getPeriods)
router.get('/seccions', getSeccions)
router.get('/seccionNames', getSeccionNames)

export default router
