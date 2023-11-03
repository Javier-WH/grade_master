import EvalPlanDates from '../../../models/evaluationPlan/evalPlanDates.js'
import getInsertionObject from './getInsertionObject.js'

export default async function insertEvalPlanDates (evalPlanDates, transaction) {
  const insertionObject = getInsertionObject(evalPlanDates)
  const idEvaluationPlan = insertionObject.idEvaluationPlan

  const existingRecord = await EvalPlanDates.findOne({ where: { idEvaluationPlan } })

  if (existingRecord) {
    return await EvalPlanDates.update(insertionObject, { where: { idEvaluationPlan }, transaction })
  }

  return await EvalPlanDates.create(insertionObject, { transaction })
}
