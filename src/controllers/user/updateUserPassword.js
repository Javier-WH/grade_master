import getUserByUser from '../../SQL/Querys/user/getUserByUser.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { comparePassword, hashPassword } from '../../utils/encryptor.js'
import { AuthenticationError } from '../../errors/authentication_errors.js'
import updatePassword from '../../SQL/Querys/user/updatePassword.js'

export default async function updateUserPassword (req, res) {
  try {
    const user = await getUserByUser(req.body)
    if (user === null || !comparePassword(req.body.password, user.password)) {
      throw new AuthenticationError()
    }
    const { id } = user
    let { newPassword: password } = req.body
    password = hashPassword(password)

    updatePassword({ id, password })
    res.status(200).send('password actualizado')
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
