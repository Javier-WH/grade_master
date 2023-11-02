import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { lapsename } from '../../SQL/Querys/pages/getCountRegisters.js'
import getTotalPages from '../../utils/getTableTotalPages.js'
import GetLapseNames from '../../SQL/Querys/basic/getLapseNames.js'

export default async function getLapseNames (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await lapsename()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }

    const lapseNames = await GetLapseNames({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      lapseNames
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
