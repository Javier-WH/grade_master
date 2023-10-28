import express from 'express'
import post from './post.js'
import get from './get.js'
import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { user } = baseRoutes

router.use(user, get)
router.use(user, post)

export default router
