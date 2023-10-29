import express from 'express'
import put from './put.js'
import middleware from '../../middlewares/basic/basic.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion } = baseRoutes
router.use(middleware)
router.use(seccion, put)

export default router
