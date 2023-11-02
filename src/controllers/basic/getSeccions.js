import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { seccion } from '../../SQL/Querys/pages/getCountRegisters.js'
import GetSeccion from '../../SQL/Querys/basic/getSeccions.js'
import getTotalPages from '../../utils/getTableTotalPages.js'

export default async function getSeccions (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await seccion()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const seccions = await GetSeccion({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      seccions
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
