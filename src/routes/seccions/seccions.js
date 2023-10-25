import express from 'express'
import get from './get.js'
import middlewares from '../../middlewares/seccion/seccion.js'
const router = express.Router()

router.use(middlewares)
router.use(get)

export default router
