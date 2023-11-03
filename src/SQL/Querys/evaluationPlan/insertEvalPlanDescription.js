import EvalPlanDesc from '../../../models/evaluationPlan/evalPlanDescription.js'
import getInsertionObject from './getInsertionObject.js'

export default async function insertEvalPlanDescription (evalPlanDescriptions, transaction) {
  const insertionObject = getInsertionObject(evalPlanDescriptions)
  const idEvaluationPlan = insertionObject.idEvaluationPlan

  const existingRecord = await EvalPlanDesc.findOne({ where: { idEvaluationPlan } })

  if (existingRecord) {
    return await EvalPlanDesc.update(insertionObject, { where: { idEvaluationPlan }, transaction })
  }

  return await EvalPlanDesc.create(insertionObject, { transaction })
}
