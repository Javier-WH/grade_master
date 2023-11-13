import express from 'express'
import getSubjects from '../../controllers/user/getSubjects.js'
const router = express.Router()

router.post('/subjects', getSubjects)

export default router
