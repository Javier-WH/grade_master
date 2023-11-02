import ErrorHandler from '../../errors/errorHandler.js'
import { NotFoundError } from '../../errors/authentication_errors.js'
import { academicYears } from '../../SQL/Querys/pages/getCountRegisters.js'
import getTableTotalPages from '../../utils/getTableTotalPages.js'
import GetAcademicYears from '../../SQL/Querys/basic/getAcademicYears.js'

export default async function getAcademicYears (req, res) {
  try {
    const { page } = req.body
    const totalRegistres = await academicYears()
    const totalPages = getTableTotalPages(totalRegistres)
    if (page > totalPages) {
      throw new NotFoundError()
    }
    const years = await GetAcademicYears({ page })
    const responseData = {
      page,
      totalPages,
      totalRegistres,
      academicYears: years
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
