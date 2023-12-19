import express from 'express'
import insertConfig from '../../controllers/config/insertConfig.js'
const router = express.Router()

router.post('/setConfig', insertConfig)

export default router
