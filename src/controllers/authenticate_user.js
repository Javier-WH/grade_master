import { AuthenticationError } from '../errors/authentication_errors.js'
import getToken from '../utils/tokenMaker.js'
import User from '../models/user.js'
import { comparePassword } from '../utils/encryptor.js'

export async function authenticateUser ({ user, password }) {
  const databaseResponse = await User.findOne({
    where: {
      user
    }
  })

  if (databaseResponse != null && databaseResponse.user === user && comparePassword(password, databaseResponse.password)) {
    const token = getToken({ user: databaseResponse.user, id: databaseResponse.id })
    return ({
      token,
      id: databaseResponse.id
    })
  }
  throw new AuthenticationError()
}
