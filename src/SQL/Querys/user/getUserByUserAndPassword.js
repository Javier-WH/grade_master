import User from '../../../models/user/user.js'
import { AuthenticationError } from '../../../errors/authentication_errors.js'
import getToken from '../../../utils/tokenMaker.js'

export default async function getUserByUserAndPassword ({ user, password }) {
  const userData = await User.findOne(
    {
      where: {
        user,
        password
      }
    }
  )

  if (userData === null) {
    throw new AuthenticationError()
  }

  const token = getToken(userData)

  return {
    id: userData.id,
    Authorization: token
  }
}
