import express from 'express'
import post from './post.js'
import validateUser from '../user/validateUser.js'
import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { evalPlan } = baseRoutes

router.use(evalPlan, validateUser)
router.use(evalPlan, post)

export default router
