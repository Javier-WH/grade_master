import EvalPlanDescriptions from '../../models/evalPlan/evalPlan_description.js'

export default async function getDescriptions (id) {
  const data = {
    evaluation_plan_id: id
  }
  const percents = await EvalPlanDescriptions.findOne(
    {
      where: data,
      raw: true
    }
  )
  return percents
}
