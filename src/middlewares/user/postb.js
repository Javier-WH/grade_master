import express from 'express'
import ErrorHandler from '../../errors/errorHandler.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import validateUserId from '../../validators/user/validateUserID.js'

const router = express.Router()

router.post('/subjects', express.json(), (req, res, next) => {
  try {
    const { error, value } = validateUserId(req.body)
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
