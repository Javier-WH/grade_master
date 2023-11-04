import express from 'express'
import createEvalPlan from '../../controllers/evalPlan/createEvalPlan.js'
const router = express.Router()

router.post('/insert', createEvalPlan)

export default router
