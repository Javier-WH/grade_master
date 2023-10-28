import express from 'express'
import getSubjects from '../../controllers/user/getSubjects.js'
const router = express.Router()

router.get('/subjects', getSubjects)

export default router
