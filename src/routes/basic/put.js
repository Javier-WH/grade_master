import express from 'express'
import seccionName from '../../controllers/basic/seccionName.js'
const router = express.Router()

router.put('/seccionName', seccionName)

export default router
