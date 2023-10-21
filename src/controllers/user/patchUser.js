import User from '../../models/user/user.js'
import { hashPassword } from '../../utils/encryptor.js'
import { UserNotFoundError, MissingDataError } from '../../errors/authentication_errors.js'

export default async function updateUser ({ id, email, password }) {
  const updateData = {}

  if (email) {
    updateData.email = email
  }

  if (password) {
    updateData.password = hashPassword(password)
  }

  if (Object.keys(updateData).length === 0) {
    throw new MissingDataError()
  }

  const [rowsAffected] = await User.update(updateData, {
    where: { id }
  })

  if (rowsAffected === 0) {
    throw new UserNotFoundError()
  }

  return id
}