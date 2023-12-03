import getUserById from '../../SQL/Querys/user/getUserById.js'
import UpdateUserData from '../../SQL/Querys/user/updateUserData.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { UserNotFoundError } from '../../errors/authentication_errors.js'

export default async function updateUserData (req, res) {
  const { userId } = req.body
  try {
    const userLoginData = await getUserById({ id: userId })
    if (userLoginData === null) {
      throw new UserNotFoundError()
    }
    await UpdateUserData(req.body)
    res.status(200).send('datos actualizados')
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
