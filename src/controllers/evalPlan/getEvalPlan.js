import _getEvalPlan from '../../SQL/Querys/evaluationPlan/getEvalPlan.js'
import ErrorHandler from '../../errors/errorHandler.js'
import { EvalPlan } from '../../SQL/Querys/pages/getCountRegisters.js'
import getTotalPages from '../../utils/getTableTotalPages.js'
import { pageSize } from '../../const/const.js'
import { NotFoundError } from '../../errors/authentication_errors.js'

export default async function getEvalPlan (req, res) {
  try {
    const { page, idSubject } = req.body
    const totalRegisters = await EvalPlan(req.body)
    const totalPages = await getTotalPages(totalRegisters)

    if (page > totalPages) {
      throw new NotFoundError('La pagina solicitada no existe')
    }

    const sqlRequest = await _getEvalPlan(req.body)

    if (sqlRequest.length === 0) {
      throw new NotFoundError('No se encontraron datos para esa seccion o peiordo')
    }

    const cleanRequest = sqlRequest.map(objeto => {
      return Object.fromEntries(Object.entries(objeto).filter(([_, value]) => value !== null))
    })

    const response = {
      page,
      idSubject,
      totalPages,
      totalRegisters,
      pageSize,
      evaluationPlans: cleanRequest
    }
    res.status(200).json(response)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
