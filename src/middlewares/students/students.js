import express from 'express'
import post from './post.js'
import get from './get.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { students } = baseRoutes

router.use(students, post)
router.use(students, get)

export default router
