import EvalPlanDates from '../../models/evalPlan/evalPlan_dates.js'

export default async function getDates (id) {
  const data = {
    evaluation_plan_id: id
  }
  const percents = await EvalPlanDates.findOne(
    {
      where: data,
      raw: true
    }
  )
  return percents
}
