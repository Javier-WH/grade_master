import express from 'express'
import login from '../../controllers/user/login.js'

const router = express.Router()

router.post('/', login)

export default router
