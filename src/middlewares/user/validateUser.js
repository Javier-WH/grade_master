import express from 'express'
import verificateToken from '../../utils/tokenReader.js'
import getUserByUser from '../../SQL/Querys/user/getUserByUser.js'
import { AuthenticationError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
const router = express.Router()

router.all('/*', async (req, res, next) => {
  try {
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
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
})

export default router
