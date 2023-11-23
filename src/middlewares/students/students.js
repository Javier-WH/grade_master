import express from 'express'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { students } = baseRoutes

router.use(students, post)

export default router
