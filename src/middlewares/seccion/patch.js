import express from 'express'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
import validatePatchSeccionData from '../../validators/seccion/validatePatchSeccionData.js'
const router = express.Router()

router.patch('/:id', express.json(), (req, res, next) => {
  try {
    const { error, value } = validatePatchSeccionData(req.body)
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
