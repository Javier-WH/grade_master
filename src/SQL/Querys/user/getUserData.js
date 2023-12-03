import userData from '../../../models/user/userData.js'

export default async function getUserData ({ userId }) {
  const data = await userData.findOne(
    {
      where: {
        userId
      },
      raw: true
    }
  )
  return data
}
