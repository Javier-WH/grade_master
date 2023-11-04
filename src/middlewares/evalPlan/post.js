import express from 'express'
import { MissingDataError } from '../../errors/authentication_errors.js'
import ErrorHandler from '../../errors/errorHandler.js'
import validateEvalPlanData from '../../validators/evalPlan/validateEvalPlanData.js'
const router = express.Router()

router.post('/insert', express.json(), (req, res, next) => {
  try {
    const { error, value } = validateEvalPlanData(req.body)

    if (error) {
      throw new MissingDataError()
    }

    const {
      id,
      idSubject,
      idLapse,
      dates,
      percents,
      desc
    } = value

    // si no envía un id, implioca que se desea hacer una actualización, por lo tanto tiene que enviar un date, percernt o desc...
    if (!id && (!dates || !percents || !desc)) {
      throw new MissingDataError()
    }

    if (id && (!idSubject || !idLapse)) {
      throw new MissingDataError()
    }
    req.body = value
    next()
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
})

export default router
