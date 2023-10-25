import express from 'express'
import validateGetSeccionData from '../../validators/seccion/validateGetSeccionData.js'
import { MissingDataError, AuthenticationError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
import verificateToken from '../../utils/tokenReader.js'
import getUserByUser from '../../SQL/Querys/user/getUserByUser.js'

const router = express.Router()

router.get('/', express.json(), async (req, res, next) => {
  try {
    // valida los datos del header
    const id = req.headers.id
    const authorization = req.headers.authorization
    const token = verificateToken(authorization)

    if (token === null || id !== token.id || !token.user) {
      throw new AuthenticationError()
    }

    // revisa que el usuario esté en la base de datos
    const userData = await getUserByUser({ user: token.user })
    if (userData === null || userData.id !== id) {
      throw new AuthenticationError()
    }

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
