import User from '../../../models/user/user.js'

export default async function updatePassword ({ id, password }) {
  await User.update(
    {
      password
    },
    {
      where: {
        id
      }
    }
  )
}
