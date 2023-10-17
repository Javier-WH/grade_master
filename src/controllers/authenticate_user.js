import { AuthenticationError } from '../errors/authentication_errors.js'
import { DataBaseConectionError } from '../errors/dataBaseConectionError.js'
import getToken from '../utils/tokenMaker.js'
import User from '../models/user.js'

export async function authenticateUser ({ user, password }) {
  try {
    const databaseResponse = await User.findOne({
      where: {
        user,
        password
      }
    })

    return new Promise((resolve, reject) => {
      if (databaseResponse != null && databaseResponse.user === user && databaseResponse.password === password) {
        const token = getToken(databaseResponse.user, databaseResponse.password)
        resolve({
          token,
          id: databaseResponse.id
        })
      } else {
        reject(new AuthenticationError())
      }
    })
  } catch (error) {
    return Promise.reject(new DataBaseConectionError())
  }
}
