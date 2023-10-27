import sequelize from '../../connection.js'

export default async function getStudentsBySubjectId (seccionId) {
  const query =
    'SELECT ' +
    'students.id AS "studentId",' +
    'students.name AS "studentName",' +
    'students.lastName AS "studentLastName",' +
    'students.ci AS "studentCi",' +
    'students.idSeccion AS "seccionId",' +
    'seccionsnames.name AS "seccionName",' +
    'subjects.id AS "subjectId",' +
    'subjectsnames.name AS "subjecName",' +
    'subjects.idUser AS "teacherId",' +
    'students.failed,' +
    'failed.subject1,' +
    'failed.subject2,' +
    'failed.subject3,' +
    'failed.subject4,' +
    'failed.subject5,' +
    'failed.subject6,' +
    'failed.subject7,' +
    'failed.subject8,' +
    'failed.subject9,' +
    'failed.subject10 ' +
    'FROM students ' +
    'JOIN subjects ON students.idSeccion = subjects.idSeccion ' +
    'JOIN subjectsnames ON subjects.idSubjectName = subjectsnames.id ' +
    'JOIN seccions ON subjects.idSeccion = seccions.id ' +
    'JOIN seccionsnames ON seccions.idSeccionName = seccionsnames.id ' +
    'JOIN users ON subjects.idUser = users.id ' +
    'LEFT JOIN failed ON students.failed = failed.id ' +
    `WHERE subjects.id = '${seccionId}'`

  const result = await sequelize.query(query)

  return result
}
