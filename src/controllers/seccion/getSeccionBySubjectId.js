import _getStudentsBySubjectId from '../../SQL/Querys/seccions/getStudentsBySubjectId.js'
import ErrorHandler from '../../errors/errorHandler.js'

// import { seccionBySubject } from '../../SQL/Querys/pages/getCountPages.js'
/*
export default async function getStudentsBySubjectId (req, res) {
  try {
    // await seccionBySubject(req.body)
    // obtiene los datos de la seccion
    const sqlRequest = await _getStudentsBySubjectId(req.body)
    const uncleanData = sqlRequest[0]

    // elimina los alumnos inscritos en la seccion pero son repitientes, solo conserva los que repiten la materia
    const seccion = uncleanData.filter(student =>
      student.failed === null ||
      student.subject1 === student.subjectId ||
      student.subject2 === student.subjectId ||
      student.subject3 === student.subjectId ||
      student.subject4 === student.subjectId ||
      student.subject5 === student.subjectId ||
      student.subject6 === student.subjectId ||
      student.subject7 === student.subjectId ||
      student.subject8 === student.subjectId ||
      student.subject9 === student.subjectId ||
      student.subject10 === student.subjectId
    )

    // elimina los datos nulos
    const filteredSeccion = seccion.map(student => {
      for (const key in student) {
        if (student[key] === null) {
          delete student[key]
        }
      }
      return student
    })

    const oderderSeccion = orderSeccionData(filteredSeccion)
    res.status(200).json(oderderSeccion)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}

function mergeObjectsBystudentIdAndsubjectId (arr) {
  const mergedObjects = arr.reduce((acc, obj) => {
    const key = `${obj.studentId}-${obj.subjectId}`
    const hasGrades = Object.prototype.hasOwnProperty.call(obj, 'grades')

    if (acc[key]) {
      if (hasGrades) {
        acc[key].grades = {
          ...acc[key].grades,
          ...obj.grades
        }
      }
    } else {
      acc[key] = obj
    }

    return acc
  }, {})

  return Object.values(mergedObjects)
}

function orderSeccionData (data) {
  const orderedData = data.map(student => {
    const {
      studentId, studentName, studentLastName, studentCi,
      seccionId, seccionName, subjectId, subjecName, teacherId,
      lapseId, lapseName, PeriodName, PeriodId,
      eval1, eval2, eval3, eval4, eval5, eval6, eval7, eval8, eval9, eval10
    } = student

    const grades = {}

    if (eval1 || eval2 || eval3 || eval4 || eval5 || eval6 || eval7 || eval8 || eval9 || eval10) {
      grades[lapseName] = {
        lapseId,
        ...((eval1 !== null && eval1 !== undefined) && { eval1 }),
        ...((eval2 !== null && eval2 !== undefined) && { eval2 }),
        ...((eval3 !== null && eval3 !== undefined) && { eval3 }),
        ...((eval4 !== null && eval4 !== undefined) && { eval4 }),
        ...((eval5 !== null && eval5 !== undefined) && { eval5 }),
        ...((eval6 !== null && eval6 !== undefined) && { eval6 }),
        ...((eval7 !== null && eval7 !== undefined) && { eval7 }),
        ...((eval8 !== null && eval8 !== undefined) && { eval8 }),
        ...((eval9 !== null && eval9 !== undefined) && { eval9 }),
        ...((eval10 !== null && eval10 !== undefined) && { eval10 })
      }
    }

    return {
      studentId,
      studentName,
      studentLastName,
      studentCi,
      seccionId,
      seccionName,
      subjectId,
      subjecName,
      teacherId,
      PeriodName,
      PeriodId,
      ...(Object.keys(grades).length > 0 && { grades })
    }
  })
  return mergeObjectsBystudentIdAndsubjectId(orderedData)
}
*/

export default async function getStudentsBySubjectId (req, res) {
  try {
    const sqlRequest = await _getStudentsBySubjectId(req.body)

    // limpia los valores nulos
    const cleanRequest = sqlRequest.map(student => {
      const cleanStudent = Object.entries(student).reduce((acc, [key, value]) => {
        if (value !== null) {
          acc[key] = value
        }
        return acc
      }, {})

      let {
        studentId, studentName, studentLastName, studentCi,
        seccionId, seccionName, subjectId, subjecName,
        teacherId, failed, lapseid, lapename,
        eval1, eval2, eval3, eval4, eval5,
        eval6, eval7, eval8, eval9, eval10
      } = cleanStudent

      if (lapename) {
        lapename = lapename.split(':')
      }
      if (lapseid) {
        lapseid = lapseid.split(':')
      }

      const grades = []
      for (let i = 0; i < lapename.length; i++) {
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

        // esto corrije un bug
        const entries = Object.entries(evals)
        const filteredEvals = entries.filter(([_, value]) => value !== undefined)

        if (Object.keys(filteredEvals).length > 0) {
          grades.push({
            lapseName: lapename[i],
            lapseid: lapseid[i],
            evals

          })
        }
      }

      const data = {
        studentId,
        studentName,
        studentLastName,
        studentCi,
        seccionId,
        seccionName,
        subjectId,
        subjecName,
        teacherId,
        failed,
        ...(grades.length > 0 && { grades })

      }

      return data
    })

    res.status(200).json(cleanRequest)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}

/*
"lapseid": "9a1e2c3d-4b5a-6c7d-8e9f-0a1b2c3d4e5f:a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d:1e2f3a4b-5c6d-7e8f-9a0b-c1d2e3f4a5b",
"lapename": "Primer Lapso:Segundo Lapso:Tercer Lapso",
"eval1": "12:15",
"eval2": "15:17",
"eval3": "14:17",
"eval4": "11:18"
*/
