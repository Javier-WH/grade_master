import User from '../../../models/user/user.js'

export default async function getUserByUser ({ user }) {
  const userData = await User.findOne(
    {
      where: {
        user
      }
    }
  )

  return userData
}
