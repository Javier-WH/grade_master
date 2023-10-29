import express from 'express'
import put from './put.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, put)

export default router
