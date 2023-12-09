import EvalPlanPercents from '../../../models/evaluationPlan/evalPlanPercents.js'

export default async function getEvalPercents ({ idEvaluationPlan }) {
  const percents = await EvalPlanPercents.findOne(
    {
      attributes: ['eval1', 'eval2', 'eval3', 'eval4', 'eval5', 'eval6', 'eval7', 'eval8', 'eval9', 'eval10'],
      where: {
        idEvaluationPlan
      },
      raw: true
    }
  )

  const percentArray = []
  for (const key in percents) {
    if (percents[key] !== null) {
      percentArray.push(percents[key])
    }
  }

  return percentArray
}
