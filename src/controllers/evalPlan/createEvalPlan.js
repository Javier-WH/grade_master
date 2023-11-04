import insertEvalPlan from '../../SQL/Querys/evaluationPlan/insertEvalPlan.js'
import insertEvalPlanDates from '../../SQL/Querys/evaluationPlan/insertEvalPlanDates.js'
import insertEvalPlanPercents from '../../SQL/Querys/evaluationPlan/insertEvalPlanPercents.js'
import insertEvalPlanDescription from '../../SQL/Querys/evaluationPlan/insertEvalPlanDescription.js'
import ErrorHandler from '../../errors/errorHandler.js'
import sequelize from '../../SQL/connection.js'
import { MissingDataError } from '../../errors/authentication_errors.js'

export default async function createEvalPlan (req, res) {
  const transaction = await sequelize.transaction()
  const {
    id,
    idSubject,
    idLapse,
    dates,
    percents,
    desc
  } = req.body

  try {
    let idEvaluationPlan = null
    if (id) {
      idEvaluationPlan = id
    } else {
      idEvaluationPlan = await insertEvalPlan({ idSubject, idLapse, transaction })
    }

    if (idEvaluationPlan === null) {
      throw new MissingDataError()
    }

    if (dates) {
      dates.idEvaluationPlan = idEvaluationPlan
      await insertEvalPlanDates(dates, transaction)
    }

    if (percents) {
      percents.idEvaluationPlan = idEvaluationPlan
      await insertEvalPlanPercents(percents, transaction)
    }
    if (desc) {
      desc.idEvaluationPlan = idEvaluationPlan
      await insertEvalPlanDescription(desc, transaction)
    }

    await transaction.commit()
    res.status(200).send('Plan de evaluasción actualizado')
  } catch (error) {
    await transaction.rollback()
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
