import express from 'express'
import get from './get.js'
import post from './post.js'
import patch from './patch.js'
import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, get)
router.use(seccion, post)
router.use(seccion, patch)

export default router
