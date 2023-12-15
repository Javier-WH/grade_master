import Admin from '../../../models/admin/admin.js'

export default async function getAdmin ({ idUser }) {
  const admin = await Admin.findOne(
    {
      where: {
        idUser
      },
      raw: true
    }
  )
  return admin
}
