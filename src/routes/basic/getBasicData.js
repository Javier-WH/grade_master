import express from 'express'
import getBasicController from '../../controllers/basic/getBasic.js'
const router = express.Router()

router.get('/basic', getBasicController)

export default router
