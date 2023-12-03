import User from '../../../models/user/user.js'

export default async function getUserByUser ({ id }) {
  const userData = await User.findOne(
    {
      where: {
        id
      },
      raw: true
    }
  )

  return userData
}
