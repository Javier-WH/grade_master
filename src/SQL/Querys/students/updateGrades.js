import Grades from '../../../models/students/grade.js'
import getEvalPercents from '../evaluationPlan/getEvalPlanPercents.js'

export default async function UpdateGrades (studentData) {
  const {
    idStudent,
    idEvaluationPlan,
    eval1,
    eval2,
    eval3,
    eval4,
    eval5,
    eval6,
    eval7,
    eval8,
    eval9,
    eval10
  } = studentData

  const percents = await getEvalPercents({ idEvaluationPlan })
  const evalsNumber = percents.length

  const evals = {}

  if (eval1 !== undefined) {
    evals.eval1 = eval1
  }
  if (eval2 !== undefined) {
    evals.eval2 = eval2
  }
  if (eval3 !== undefined) {
    evals.eval3 = eval3
  }
  if (eval4 !== undefined) {
    evals.eval4 = eval4
  }
  if (eval5 !== undefined) {
    evals.eval5 = eval5
  }
  if (eval6 !== undefined) {
    evals.eval6 = eval6
  }
  if (eval7 !== undefined) {
    evals.eval7 = eval7
  }
  if (eval8 !== undefined) {
    evals.eval8 = eval8
  }
  if (eval9 !== undefined) {
    evals.eval9 = eval9
  }
  if (eval10 !== undefined) {
    evals.eval10 = eval10
  }

  // elimina las notas sobrantes, es decir las que no tienen porcentajes
  for (let i = (evalsNumber + 1); i <= 10; i++) {
    evals[`eval${i}`] = null
  }

  const gradesExist = await Grades.findOne(
    {
      where: {
        idStudent,
        idEvaluationPlan
      }
    }
  )

  if (gradesExist != null) {
    await Grades.update(
      evals,
      {
        where: {
          idStudent,
          idEvaluationPlan
        }
      }
    )
  } else {
    evals.idStudent = idStudent
    evals.idEvaluationPlan = idEvaluationPlan
    await Grades.create(evals)
  }
}
