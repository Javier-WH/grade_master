import express from 'express'
import validatePostSeccionData from '../../validators/seccion/validatePostSeccionData.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
const router = express.Router()

router.post('/', express.json(), (req, res, next) => {
  try {
    const { error, value } = validatePostSeccionData(req.body)
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
