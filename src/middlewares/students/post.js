import express from 'express'
import validateAcademicYearsData from '../../validators/students/validateUpdateGradeData.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
const router = express.Router()

router.post('/updateGrades', express.json(), (req, res, next) => {
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
})

export default router
