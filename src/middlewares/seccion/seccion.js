import express from 'express'
import get from './get.js'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, get)
router.use(seccion, post)

export default router
