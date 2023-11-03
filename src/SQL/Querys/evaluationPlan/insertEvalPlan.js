import { v4 as uuidv4 } from 'uuid'
import EvalPlan from '../../../models/evaluationPlan/evaluationPlan.js'

export default async function insertEvalPlan ({ idSubject, idLapse, transaction }) {
  const id = uuidv4()
  await EvalPlan.create({ id, idSubject, idLapse }, { transaction })
  return id
}
