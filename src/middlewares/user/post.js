import express from 'express'
import validateUserData from '../../validators/user/validateLoginData.js'
import validateUpdateUserPassword from '../../validators/user/validateUpdatePasswordData.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
const router = express.Router()

function validate (req, res, next) {
  try {
    const { error, value } = validateUserData(req.body)
    if (error) {
      throw new MissingDataError(error.message)
    }
    req.body = value
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}

router.post('/login', express.json(), (req, res, next) => {
  next()
})

router.post('/signup', express.json(), validate)

router.post('/userData', express.json(), (req, res, next) => {
  next()
})

router.post('/getUserData', express.json(), (req, res, next) => {
  next()
})

router.post('/updateUserData', express.json(), (req, res, next) => {
  next()
})

router.post('/updateUserPass', express.json(), (req, res, next) => {
  try {
    const { error, value } = validateUpdateUserPassword(req.body)
    if (error) {
      throw new MissingDataError(error.message)
    }
    req.body = value
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
})
export default router
