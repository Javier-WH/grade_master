import { validate as validateUUID } from 'uuid'
import verificateToken from '../utils/tokenReader.js'

export default function validateData (req, res) {
  const userId = req.params.id
  const authorization = req.get('authorization')
  const currentTimestamp = Math.floor(Date.now() / 1000)

  // check if id is a valid uuid and have and autorization token
  if (!validateUUID(userId) || authorization === undefined) {
    return {
      error: 'Los datos suministrados son incorrectos',
      code: 400
    }
  }

  // check if the token belongs to the sender and it is not expired
  const token = verificateToken(authorization)
  if (token === null || token.id !== userId || token.exp < currentTimestamp) {
    return {
      error: 'acceso denegado',
      code: 401
    }
  }

  return userId
}
