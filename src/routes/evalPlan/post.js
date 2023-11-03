import express from 'express'
import createEvalPlan from '../../controllers/evalPlan/createEvalPlan.js'
const router = express.Router()

router.post('/insert', express.json(), createEvalPlan)

export default router
