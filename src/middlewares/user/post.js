import express from 'express'
import validateUserData from '../../validators/user/validateLoginData.js'
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

router.post('/login', express.json(), validate)

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

export default router
