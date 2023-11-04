import _getStudentsBySubjectId from '../../../SQL/Querys/seccions/getStudentsBySubjectId.js'
import ErrorHandler from '../../../errors/errorHandler.js'
import orderSeccionData from './orderSeccionData.js'
import { seccionBySubjectRegisters } from '../../../SQL/Querys/pages/getCountRegisters.js'
import getTotalPages from '../../../utils/getTableTotalPages.js'
import { pageSize } from '../../../const/const.js'
import { NotFoundError } from '../../../errors/authentication_errors.js'

export default async function getStudentsBySubjectId (req, res) {
  try {
    const { page, idPeriod } = req.body
    const totalRegisters = await seccionBySubjectRegisters(req.body)
    const totalPages = await getTotalPages(totalRegisters)

    if (page > totalPages) {
      throw new NotFoundError('La pagina solicitada no existe')
    }

    const sqlRequest = await _getStudentsBySubjectId(req.body)

    if (sqlRequest.length === 0) {
      throw new NotFoundError('No se encontraron datos para esa seccion o peiordo')
    }

    const { students, seccionId, seccionName, subjectId, subjecName, teacherId } = orderSeccionData(sqlRequest)
    const response = {
      page,
      idPeriod,
      totalPages,
      totalRegisters,
      pageSize,
      seccionId,
      seccionName,
      subjectId,
      subjecName,
      teacherId,
      students
    }

    res.status(200).json(response)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
