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
    res.status(200).json(filteredSeccion)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
