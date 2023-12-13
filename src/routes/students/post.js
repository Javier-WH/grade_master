import express from 'express'
import updateGrades from '../../controllers/students/updateGrades.js'
import registerStudentData from '../../controllers/students/registerStudenData.js'
import getStudentData from '../../controllers/students/getStudentData.js'
import getStudent from '../../controllers/students/getStudent.js'
const router = express.Router()

router.post('/updateGrades', updateGrades)
router.post('/updateData', registerStudentData)
router.post('/getData', getStudentData)
router.post('/getStudent', getStudent)

export default router
