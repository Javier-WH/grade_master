import User from '../models/user.js'
import { hashPassword } from '../utils/encryptor.js'

export default async function updateUser ({ id, email, password }) {
  const updateData = {}

  if (email) {
    updateData.email = email
  }

  if (password) {
    updateData.password = hashPassword(password)
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error('No se proporcionaron datos para actualizar')
  }

  const [rowsAffected] = await User.update(updateData, {
    where: { id }
  })

  if (rowsAffected === 0) {
    throw new Error('Usuario no encontrado')
  }

  return id
}
