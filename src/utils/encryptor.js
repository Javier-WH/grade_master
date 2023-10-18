import bcrypt from 'bcryptjs'

const saltRounds = 10

export function hashPassword (password) {
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(password, salt)
  return hashedPassword
}

export function comparePassword (password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword)
}
