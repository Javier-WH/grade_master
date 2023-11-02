export default function orderSeccionData (sqlRequest) {
  const students = sqlRequest.map(student => {
    // cleans nulls values
    const cleanStudent = Object.entries(student).reduce((acc, [key, value]) => {
      if (value !== null) {
        acc[key] = value
      }
      return acc
    }, {})

    // get student values
    let {
      studentId, studentName, studentLastName, studentCi,
      failed, lapseid, lapsename,
      eval1, eval2, eval3, eval4, eval5,
      eval6, eval7, eval8, eval9, eval10
    } = cleanStudent

    // order student grades
    const grades = []
    if (lapsename) {
      lapsename = lapsename.split(':')
    }
    if (lapseid) {
      lapseid = lapseid.split(':')
      for (let i = 0; i < lapsename.length; i++) {
        const evals = {}
        if (eval1) {
          evals.eval1 = eval1.split(':')[i]
        }
        if (eval2) {
          evals.eval2 = eval2.split(':')[i]
        }
        if (eval3) {
          evals.eval3 = eval3.split(':')[i]
        }
        if (eval4) {
          evals.eval4 = eval4.split(':')[i]
        }
        if (eval5) {
          evals.eval5 = eval5.split(':')[i]
        }
        if (eval6) {
          evals.eval6 = eval6.split(':')[i]
        }
        if (eval7) {
          evals.eval7 = eval7.split(':')[i]
        }
        if (eval8) {
          evals.eval8 = eval8.split(':')[i]
        }
        if (eval9) {
          evals.eval9 = eval9.split(':')[i]
        }
        if (eval10) {
          evals.eval10 = eval10.split(':')[i]
        }

        // this prevent that undefines values
        const entries = Object.entries(evals)
        const filteredEvals = entries.filter(([_, value]) => value !== undefined)

        if (Object.keys(filteredEvals).length > 0) {
          grades.push({
            lapseName: lapsename[i],
            lapseid: lapseid[i],
            evals

          })
        }
      }
    }

    const data = {
      studentId,
      studentName,
      studentLastName,
      studentCi,
      failed,
      ...(grades.length > 0 && { grades })

    }

    return data
  })

  const seccionId = sqlRequest[0].seccionId
  const seccionName = sqlRequest[0].seccionName
  const subjectId = sqlRequest[0].subjectId
  const subjecName = sqlRequest[0].subjecName
  const teacherId = sqlRequest[0].teacherId
  return {
    students,
    seccionId,
    seccionName,
    subjectId,
    subjecName,
    teacherId
  }
}
