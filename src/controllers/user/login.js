import getUserByUser from '../../SQL/Querys/user/getUserByUser.js'
import ErrorHandler from '../../errors/errorHandler.js'
import getToken from '../../utils/tokenMaker.js'
import { AuthenticationError } from '../../errors/authentication_errors.js'
import { comparePassword } from '../../utils/encryptor.js'

export default async function login (req, res) {
  try {
    const user = await getUserByUser(req.body)
    if (user === null || !comparePassword(req.body.password, user.password)) {
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
