import express from 'express'
import get from './get.js'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'
import middlewares from '../../middlewares/seccion/seccion.js'
const router = express.Router()

const { seccion } = baseRoutes

router.use(middlewares)
router.use(seccion, get)
router.use(seccion, post)

export default router
