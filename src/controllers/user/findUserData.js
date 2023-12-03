import getUserById from '../../SQL/Querys/user/getUserById.js'
import getUserData from '../../SQL/Querys/user/getUserData.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { UserNotFoundError } from '../../errors/authentication_errors.js'

export default async function findUserData (req, res) {
  const { userId } = req.body

  try {
    const userLoginData = await getUserById({ id: userId })
    if (userLoginData === null) {
      throw new UserNotFoundError()
    }
    const userPersonalData = await getUserData({ userId })
    res.status(200).json(userPersonalData)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
