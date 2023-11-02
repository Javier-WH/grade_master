import express from 'express'
import put from './put.js'
import post from './post.js'
import get from './get.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, put)
router.use(post)
router.use(get)
export default router
