import userData from '../../../models/user/userData.js'

export default async function insertUserData ({ userId, name, lastName, ci, phone, email }) {
  await userData.create({
    userId,
    name,
    lastName,
    ci,
    phone,
    email
  })
}
