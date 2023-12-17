import express from 'express'
import get from './get.js'
import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { config } = baseRoutes

router.use(config, get)

export default router
