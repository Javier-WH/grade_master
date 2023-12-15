import ErrorHandler from '../../errors/errorHandler.js'
import getAdmin from '../../SQL/Querys/admin/getAdmin.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
export default async function loginAdmin (req, res) {
  try {
    const isAdmin = await getAdmin(req.body)

    if (!isAdmin) {
      throw new NotFoundError('El usuario no tiene permisos de administrador')
    }
    res.status(200).json(isAdmin)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
