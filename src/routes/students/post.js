import express from 'express'
import updateGrades from '../../controllers/students/updateGrades.js'
import registerStudentData from '../../controllers/students/registerStudenData.js'
import getStudentData from '../../controllers/students/getStudentData.js'
const router = express.Router()

router.post('/updateGrades', updateGrades)
router.post('/updateData', registerStudentData)
router.post('/getData', getStudentData)

export default router
