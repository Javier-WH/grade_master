import { DataBaseConectionError, DuplicateValues } from '../errors/dataBaseConectionError.js'
import User from '../models/user.js'

export default async function signUpUser ({ id, user, email, password }) {
  try {
    await User.create({ id, user, email, password })
    return Promise.resolve(id)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      const fields = Object.keys(error.fields)
      return Promise.reject(new DuplicateValues(fields))
    }

    return Promise.reject(new DataBaseConectionError())
  }
}
