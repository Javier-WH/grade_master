import sequelize from '../../connection.js'
import { QueryTypes } from 'sequelize'
import { pageSize as limit } from '../../../const/const.js'

export default async function getStudentsBySeccionId ({ idSeccion, page, idPeriod }) {
  const offset = (page - 1) * limit

  const query = `SELECT DISTINCT
                  students.id AS "idStudent",
                  students.name AS "studentName",
                  students.lastName AS "studentLastName",
                  students.ci AS "studentCi",
                  students.failed AS "studentFailed",
                  period.id AS "idPeriod",
                  period.period AS "periodName"
                  FROM students
                  JOIN seccions ON seccions.id = students.idSeccion
                  JOIN subjects ON subjects.idSeccion = seccions.id
                  JOIN period ON period.id = subjects.idPeriod
                  WHERE seccions.id = "${idSeccion}" AND subjects.idPeriod = "${idPeriod}"
                  LIMIT ${limit} OFFSET ${offset}`

  const students = await sequelize.query(query, { type: QueryTypes.SELECT })

  return students
}
