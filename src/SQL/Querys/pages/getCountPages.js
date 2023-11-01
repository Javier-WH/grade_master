import sequelize from '../../connection.js'
import { QueryTypes } from 'sequelize'

export async function seccionBySubject ({ id }) {
  const query = 'SELECT DISTINCT COUNT(*) AS totalRegistros ' +
                'FROM students ' +
                'JOIN subjects ON students.idSeccion = subjects.idSeccion ' +
                'JOIN subjectsnames ON subjects.idSubjectName = subjectsnames.id ' +
                'JOIN seccions ON subjects.idSeccion = seccions.id ' +
                'JOIN seccionsnames ON seccions.idSeccionName = seccionsnames.id ' +
                'JOIN users ON subjects.idUser = users.id ' +
                'LEFT JOIN evaluationplan ON evaluationplan.idSubject = subjects.id ' +
                'LEFT JOIN grades ON grades.idEvaluationPlan = evaluationplan.id ' +
                'AND grades.idStudent = students.id ' +
                'LEFT JOIN failed ON students.failed = failed.id ' +
                `WHERE subjects.id = "${id}" ` +
                'GROUP BY students.id; '

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })
  return request[0].totalRegistros
}
