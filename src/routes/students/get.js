import express from 'express'
import getPhoto from '../../controllers/students/getPhoto.js'
const router = express.Router()

router.get('/photo', getPhoto)

export default router
