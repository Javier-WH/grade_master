import post from './post.js'
import { baseRoutes } from '../../const/const.js'
import express from 'express'
import middlewares from '../../middlewares/user/user.js'
const router = express.Router()
const { user } = baseRoutes

router.use(middlewares)
router.use(user, post)

export default router
