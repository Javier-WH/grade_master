import express from 'express'
import post from './post.js'

import { baseRoutes } from '../../const/const.js'

const router = express.Router()

const { parents } = baseRoutes

router.use(parents, post)

export default router
