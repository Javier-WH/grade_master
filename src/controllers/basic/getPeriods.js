import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { period } from '../../SQL/Querys/pages/getCountRegisters.js'
import GetPeriods from '../../SQL/Querys/basic/getPeriods.js'
import getTotalPages from '../../utils/getTableTotalPages.js'

export default async function getPeriods (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await period()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const periods = await GetPeriods({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      periods
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
