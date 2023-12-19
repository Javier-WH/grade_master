import express from 'express'
import get from './get.js'
import post from './post.js'
import { baseRoutes } from '../../const/const.js'
import middlewares from '../../middlewares/config/config.js'
const router = express.Router()

const { config } = baseRoutes

router.use(middlewares)
router.use(config, get)
router.use(config, post)

export default router
