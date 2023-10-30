import express from 'express'
import put from './put.js'
import getBasic from './getBasicData.js'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion } = baseRoutes

router.use(getBasic)
router.use(seccion, put)
router.use(post)
export default router
