import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { subject } from '../../SQL/Querys/pages/getCountRegisters.js'
import GetSubjec from '../../SQL/Querys/basic/getSubjects.js'
import getTotalPages from '../../utils/getTableTotalPages.js'

export default async function getSubjects (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await subject()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const subjecs = await GetSubjec({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      subjecs
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
