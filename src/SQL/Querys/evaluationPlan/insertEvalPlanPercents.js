import EvalPlanPercent from '../../../models/evaluationPlan/evalPlanPercents.js'
import getInsertionObject from './getInsertionObject.js'

export default async function insertEvalPlanPercents (evalPlanPercents, transaction) {
  const insertionObject = getInsertionObject(evalPlanPercents)
  const idEvaluationPlan = insertionObject.idEvaluationPlan

  const existingRecord = await EvalPlanPercent.findOne({ where: { idEvaluationPlan } })

  if (existingRecord) {
    return await EvalPlanPercent.update(insertionObject, { where: { idEvaluationPlan }, transaction })
  }
  return await EvalPlanPercent.create(insertionObject, { transaction })
}
