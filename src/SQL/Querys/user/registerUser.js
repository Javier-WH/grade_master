import User from '../../../models/user/user.js'
import { v4 as uuidv4 } from 'uuid'
import { hashPassword } from '../../../utils/encryptor.js'

export default async function registerUser ({ user, password }) {
  const id = uuidv4()

  password = hashPassword(password)

  await User.create({
    id,
    user,
    password
  })
}
