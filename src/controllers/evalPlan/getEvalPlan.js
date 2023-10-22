import EvaluationPlan from '../../models/evalPlan/evaluation_plans.js'
import getPercents from './getPercents.js'
import getDescriptions from './getDescriptions.js'
import getDates from './getDates.js'
import getSectionSubjects from '../getSeccionSubjects.js'

export default async function getEvalPlan ({ idAcademicYear, idSeccion, idSubject, lapse }) {
  const seccion = await getSectionSubjects({ idAcademicYear, idSeccion, idSubject })

  if (seccion.length !== 1) {
    return null
  }
  const seccionID = seccion[0].id

  const evalPlan = await EvaluationPlan.findOne(
    {
      where: {
        seccion_subject_id: seccionID
      },
      raw: true
    }
  )

  if (evalPlan === null) {
    return null
  }

  const evalPlanID = evalPlan.id
  const evalPlanPercents = await getPercents(evalPlanID)
  const evalPlanDescriptions = await getDescriptions(evalPlanID)
  const evalPlanDates = await getDates(evalPlanID)

  const uncleanEvalPlan = {}

  Object.keys(evalPlanPercents).forEach((key) => {
    uncleanEvalPlan[key] = {
      percent: evalPlanPercents[key],
      description: evalPlanDescriptions[key],
      date: evalPlanDates[key]
    }
  })

  const CleanEvalPlan = Object.fromEntries(
    Object.entries(uncleanEvalPlan).filter(([key, value]) => {
      if (key.startsWith('eval')) {
        return value.percent !== null || value.description !== null || value.date !== null
      }
      return false
    })
  )

  CleanEvalPlan.evaluation_plan_id = evalPlanID

  return CleanEvalPlan
}
