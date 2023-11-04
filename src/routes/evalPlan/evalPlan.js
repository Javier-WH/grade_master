import express from 'express'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'
import middleware from '../../middlewares/evalPlan/evalplan.js'

const router = express.Router()
const { evalPlan } = baseRoutes
router.use(middleware)
router.use(evalPlan, post)

export default router
