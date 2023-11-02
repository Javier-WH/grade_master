import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { subjecName } from '../../SQL/Querys/pages/getCountRegisters.js'
import GetSubjectName from '../../SQL/Querys/basic/getSubjectNames.js'
import getTotalPages from '../../utils/getTableTotalPages.js'

export default async function getSubjectNames (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await subjecName()
    const totalPages = getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const subjecNames = await GetSubjectName({ page })
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      subjecNames
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
