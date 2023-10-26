import express from 'express'
import validateGetSeccionData from '../../validators/seccion/validateGetSeccionData.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'

const router = express.Router()

router.get('/', express.json(), async (req, res, next) => {
  try {
    // valida los datos del body
    const { error, value } = validateGetSeccionData(req.body)
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
