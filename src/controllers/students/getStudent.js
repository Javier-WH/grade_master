import getAStudent from '../../SQL/Querys/students/getAStudent.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { GetStudent } from '../../SQL/Querys/pages/getCountRegisters.js'
import getTotalPages from '../../utils/getTableTotalPages.js'
import { pageSize } from '../../const/const.js'
import { NotFoundError } from '../../errors/authentication_errors.js'

export default async function getStudent (req, res) {
  try {
    const { page } = req.body
    const totalRegisters = await GetStudent(req.body)
    const totalPages = await getTotalPages(totalRegisters)
    if (page > totalPages) {
      throw new NotFoundError('La pagina solicitada no existe')
    }

    const sqlRequest = await getAStudent(req.body)

    if (sqlRequest.length === 0) {
      throw new NotFoundError('No se encontraron datos para esa seccion o peiordo')
    }

    const cleanRequest = sqlRequest.map(objeto => {
      return Object.fromEntries(Object.entries(objeto).filter(([_, value]) => value !== null))
    })

    const response = {
      page,
      totalPages,
      totalRegisters,
      pageSize,
      studentsFounds: cleanRequest
    }
    res.status(200).json(response)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
