import { AuthenticationError } from '../errors/authentication_errors.js'
import { DataBaseConectionError } from '../errors/dataBaseConectionError.js'
import User from '../models/user.js'

export async function authenticateUser ({ user, password }) {
  let USER
  let PASS

  try {
    const databaseResponse = await User.findOne({
      where: {
        user,
        password
      }
    })

    if (databaseResponse !== null) {
      USER = databaseResponse.user
      PASS = databaseResponse.password
    }

    return new Promise((resolve, reject) => {
      if (user === USER && password === PASS) {
        resolve('Token')
      } else {
        reject(new AuthenticationError())
      }
    })
  } catch (error) {
    return Promise.reject(new DataBaseConectionError())
  }
}
