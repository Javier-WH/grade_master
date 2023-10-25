import jwt from 'jsonwebtoken'

const secretKey = process.env.TOKENKEY

export default function getToken ({ id, user }) {
  const payload = { id, user }
  const expiresIn = '3h'
  const token = jwt.sign(payload, secretKey, { expiresIn })
  return token
}
