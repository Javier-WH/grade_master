import express from 'express'
import postb from './postb.js'
import post from './post.js'
import del from './delete.js'
import patch from './patch.js'
import { baseRoutes } from '../../const/const.js'
import middlewares from '../../middlewares/seccion/seccion.js'
const router = express.Router()

const { seccion } = baseRoutes

router.use(middlewares)
router.use(seccion, postb)
router.use(seccion, post)
router.use(seccion, del)
router.use(seccion, patch)

export default router
