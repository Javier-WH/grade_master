import EvalPlanPercents from '../../models/evalPlan/evalPlan_percents.js'

export default async function getPercents (id) {
  const data = {
    evaluation_plan_id: id
  }
  const percents = await EvalPlanPercents.findOne(
    {
      where: data,
      raw: true
    }
  )
  return percents
}
