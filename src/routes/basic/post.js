import express from 'express'
import createSubject from '../../controllers/basic/createSubject.js'
import subjectSetUser from '../../controllers/basic/subjectSetUser.js'

const router = express.Router()

router.post('/addsubject', createSubject) // agrega una materia a una seccion
router.post('/subject/setUser', subjectSetUser)
export default router
