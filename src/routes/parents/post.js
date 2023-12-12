import express from 'express'
import insertParent from '../../controllers/parents/insertParent.js'
const router = express.Router()

router.post('/updateParents', insertParent)

export default router
