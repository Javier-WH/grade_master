import _getStudentsBySubjectId from '../../SQL/Querys/seccions/getStudentsBySubjectId.js'
import ErrorHandler from '../../errors/errorHandler.js'
export default async function getStudentsBySubjectId (req, res) {
  try {
    // obtiene los datos de la seccion
    const sqlRequest = await _getStudentsBySubjectId(req.body.id)
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
