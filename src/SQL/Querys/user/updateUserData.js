import userData from '../../../models/user/userData.js'

export default async function UpdateUserData ({ userId, name, lastName, ci, phone, email }) {
  await userData.update({
    name,
    lastName,
    ci,
    phone,
    email
  },
  {
    where: {
      userId
    }
  }
  )
}
