import User from '../models/user.js'
import { hashPassword } from '../utils/encryptor.js'

export default async function signUpUser ({ id, user, email, password }) {
  password = hashPassword(password)
  await User.create({ id, user, email, password })
  return Promise.resolve(id)
}
