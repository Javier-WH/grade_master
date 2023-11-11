import express from 'express'
import validateAcademicYearsData from '../../validators/basic/validateAcademicYearsData.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'

const router = express.Router()

function validate (req, res, next) {
  try {
    const { error, value } = validateAcademicYearsData(req.body)
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

router.post('/academicYears', express.json(), validate)
router.post('/lapseNames', express.json(), validate)
router.post('/periods', express.json(), validate)
router.post('/seccions', express.json(), validate)
router.post('/seccionNames', express.json(), validate)
router.post('/subjectNames', express.json(), validate)
router.post('/subjects', express.json(), validate)
export default router
