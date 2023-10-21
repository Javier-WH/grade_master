import User from '../../models/user/user.js'
import { MissingDataError, UserNotFoundError } from '../../errors/authentication_errors.js'
export default async function getUser ({ id, user, email }) {
  const serchParams = {}

  if (id) {
    serchParams.id = id
  }
  if (user) {
    serchParams.user = user
  }
  if (email) {
    serchParams.email = email
  }
  if (Object.keys(serchParams).length === 0) {
    throw new MissingDataError()
  }
  const userData = await User.findOne({
    attributes: ['id', 'user', 'email'],
    where: serchParams,
    raw: true
  })
  if (userData === null) {
    throw new UserNotFoundError()
  }
  return userData
}
