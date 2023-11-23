import express from 'express'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'
import middlewares from '../../middlewares/students/students.js'
const router = express.Router()

const { students } = baseRoutes

router.use(middlewares)
router.use(students, post)

export default router
