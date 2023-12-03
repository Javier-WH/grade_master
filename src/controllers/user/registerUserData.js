import getUserById from '../../SQL/Querys/user/getUserById.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { UserNotFoundError } from '../../errors/authentication_errors.js'
import insertUserData from '../../SQL/Querys/user/registerUserData.js'

export default async function registerUserData (req, res) {
  const { userId: id } = req.body

  try {
    const userData = await getUserById({ id })
    if (userData === null) {
      throw new UserNotFoundError()
    }
    await insertUserData(req.body)
    res.status(200).send('Datos insertados')
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
