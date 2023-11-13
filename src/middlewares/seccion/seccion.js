import express from 'express'
import postb from './postb.js'
import post from './post.js'
import patch from './patch.js'
import del from './delete.js'
import { baseRoutes } from '../../const/const.js'
import validateUser from '../user/validateUser.js'
const router = express.Router()

const { seccion } = baseRoutes

router.use(seccion, validateUser)
router.use(seccion, postb)
router.use(seccion, post)
router.use(seccion, patch)
router.use(seccion, del)

export default router
