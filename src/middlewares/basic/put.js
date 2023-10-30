import express from 'express'
import validateSeccionNameData from '../../validators/basic/validateSeccionNameData.js'
import validatePeriodData from '../../validators/basic/validatePeriod.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
const router = express.Router()

function validate (req, res, next) {
  try {
    const { error, value } = validateSeccionNameData(req.body)
    if (error) {
      throw new MissingDataError()
    }
    req.body = value
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
router.use(express.json())
router.put('/seccionName', validate)
router.put('/subjectName', validate)
router.put('/lapeseName', validate)
router.put('/period', (req, res, next) => {
  try {
    const { error, value } = validatePeriodData(req.body)
    if (error) {
      throw new MissingDataError()
    }
    req.body = value
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
})

export default router
