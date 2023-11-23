import express from 'express'
import updateGrades from '../../controllers/students/updateGrades.js'
const router = express.Router()

router.post('/updateGrades', updateGrades)

export default router
