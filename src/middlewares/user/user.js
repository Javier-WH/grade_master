import express from 'express'
import post from './post.js'

import { baseRoutes } from '../../const/const.js'
const router = express.Router()

const { user } = baseRoutes

router.use(user, post)

export default router
