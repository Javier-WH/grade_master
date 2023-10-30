import express from 'express'
import seccionName from '../../controllers/basic/seccionName.js'
import subjectName from '../../controllers/basic/subjectName.js'
import period from '../../controllers/basic/period.js'
import lapeseName from '../../controllers/basic/lapseName.js'

const router = express.Router()

router.put('/seccionName', seccionName)
router.put('/subjectName', subjectName)
router.put('/period', period)
router.put('/lapeseName', lapeseName)

export default router
