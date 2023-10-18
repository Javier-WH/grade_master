import User from '../models/user.js'

export default async function deleteUser (id) {
  const DBresponde = await User.destroy({
    where: {
      id
    }
  })
  return DBresponde
}
