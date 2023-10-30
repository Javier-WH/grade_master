import express from 'express'
import createSubject from '../../controllers/basic/createSubject.js'

const router = express.Router()

router.post('/addsubject', createSubject)

export default router
