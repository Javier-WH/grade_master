import jwt from 'jsonwebtoken'

const secretKey = 'GraDeMaster'

export default function getToken ({ id, user }) {
  const payload = { id, user }
  const token = jwt.sign(payload, secretKey)
  return token
}
