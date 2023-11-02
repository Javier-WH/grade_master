import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { seccionName } from '../../SQL/Querys/pages/getCountRegisters.js'
import GetSeccionName from '../../SQL/Querys/basic/getSeccionNames.js'
import getTotalPages from '../../utils/getTableTotalPages.js'

export default async function getSeccionNames (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await seccionName()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const seccionNames = await GetSeccionName({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      seccionNames
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
