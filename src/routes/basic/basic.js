import express from 'express'
import put from './put.js'
import post from './post.js'
import postb from './postb.js'
import middleware from '../../middlewares/basic/basic.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion, basic } = baseRoutes
router.use(middleware)
router.use(seccion, put)
router.use(basic, postb)
router.use(post)

export default router
