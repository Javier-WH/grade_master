import Grades from '../../../models/students/grade.js'

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

  const evals = {}

  if (eval1) {
    evals.eval1 = eval1
  }
  if (eval2) {
    evals.eval2 = eval2
  }
  if (eval3) {
    evals.eval3 = eval3
  }
  if (eval4) {
    evals.eval4 = eval4
  }
  if (eval5) {
    evals.eval5 = eval5
  }
  if (eval6) {
    evals.eval6 = eval6
  }
  if (eval7) {
    evals.eval7 = eval7
  }
  if (eval8) {
    evals.eval8 = eval8
  }

  if (eval9) {
    evals.eval9 = eval9
  }
  if (eval10) {
    evals.eval10 = eval10
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
