import User from '../../../models/user/user.js'

export default async function getUserByUserAndPassword ({ user, password }) {
  const userData = await User.findOne(
    {
      where: {
        user,
        password
      }
    }
  )
  return userData
}
