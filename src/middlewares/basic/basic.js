import express from 'express'
import put from './put.js'
import getBasic from './getBasicData.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, put)
router.use(getBasic)
export default router
