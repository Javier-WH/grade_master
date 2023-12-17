import express from 'express'
import getConfigList from '../../controllers/config/getConfig.js'
const router = express.Router()

router.get('/getConfig', getConfigList)

export default router
