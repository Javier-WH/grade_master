import jwt from 'jsonwebtoken'
const secretKey = process.env.TOKENKEY

export default function verificateToken (token) {
  try {
    const decoded = jwt.verify(token, secretKey)
    return decoded
  } catch (error) {
    return null
  }
}
