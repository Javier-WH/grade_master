import express from 'express'
import put from './put.js'
import post from './post.js'
import postb from './postb.js'
import validateUser from '../user/validateUser.js'
import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { seccion, basic } = baseRoutes

router.use(seccion, put)
router.use(post)
router.use(basic, validateUser)
router.use(basic, postb)
export default router
