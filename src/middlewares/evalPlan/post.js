import express from 'express'
// import { MissingDataError } from '../../errors/authentication_errors.js'
// import ErrorHandler from '../../errors/errorHandler.js'
const router = express.Router()

router.post('/insert', express.json(), (req, res, next) => {
  next()
})

export default router
