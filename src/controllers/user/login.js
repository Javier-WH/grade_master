import getUserByUserAndPassword from '../../SQL/Querys/user/getUserByUserAndPassword.js'
import ErrorHandler from '../../errors/errorHandler.js'
import getToken from '../../utils/tokenMaker.js'
import { AuthenticationError } from '../../errors/authentication_errors.js'

export default async function login (req, res) {
  try {
    const user = await getUserByUserAndPassword(req.body)
    if (user === null) {
      throw new AuthenticationError()
    }

    const Authorization = getToken(user)
    const { id } = user
    const userData = {
      id,
      Authorization
    }
    res.status(200).json(userData)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
