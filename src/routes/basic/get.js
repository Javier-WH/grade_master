import express from 'express'
import getAcademicYears from '../../controllers/basic/getAcademicYeats.js'

const router = express.Router()

router.get('/academicYears', express.json(), getAcademicYears)

export default router
