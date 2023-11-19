import express from 'express'
import createEvalPlan from '../../controllers/evalPlan/createEvalPlan.js'
import getEvalPlan from '../../controllers/evalPlan/getEvalPlan.js'
const router = express.Router()

router.post('/insert', createEvalPlan)
router.post('/evalPlan', getEvalPlan)

export default router
