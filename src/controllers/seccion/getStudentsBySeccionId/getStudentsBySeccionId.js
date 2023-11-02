import _getStudentsBySeccionId from '../../../SQL/Querys/seccions/getStudentsBySeccionId.js'
import errorHandler from '../../../errors/errorHandler.js'
import oderSeccionData from './oderSeccionData.js'
import { seccionByIdRegisters } from '../../../SQL/Querys/pages/getCountRegisters.js'
import getTotalPages from '../../../utils/getTableTotalPages.js'
import { NotFoundError } from '../../../errors/authentication_errors.js'
import { pageSize } from '../../../const/const.js'

export default async function getStudentsBySeccionId (req, res) {
  try {
    const { id: idSeccion, page } = req.body
    const totalRegisters = await seccionByIdRegisters({ idSeccion })
    const totalPages = getTotalPages(totalRegisters)

    if (page > totalPages) {
      throw new NotFoundError('La pagina solicitada no existe')
    }

    const sqlRequest = await _getStudentsBySeccionId({ idSeccion, page })
    const student = oderSeccionData(sqlRequest)
    const responseData = {
      page,
      totalPages,
      totalRegisters,
      pageSize,
      seccionId: idSeccion,
      student
    }
    res.status(200).json(responseData)
  } catch (error) {
    const { message, code } = errorHandler(error)
    res.status(code).send(message)
  }
}
