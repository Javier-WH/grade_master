import sequelize from '../../connection.js'
import { pageSize as limit } from '../../../const/const.js'
import { QueryTypes } from 'sequelize'

export default async function getAStudent ({ name, lastName, ci, page }) {
  const offset = (page - 1) * limit

  const placeHolder = 'Drunk Xenomorph'
  if (!name) {
    name = placeHolder
  }
  if (!lastName) {
    lastName = placeHolder
  }
  if (!ci) {
    ci = placeHolder
  }

  const sqlQuery = `
    SELECT
    students.id AS studentId,
    students.name AS studentName,
    students.lastName AS studentLastname,
    students.ci AS studentCi,
    students.idSeccion AS seccionId,
    studentdata.gender AS studentGender,
    studentdata.birthDate AS studentBirthDate,
    father.id AS fatherId,
    father.name AS fatherName,
    father.lastName AS fatherLastName,
    father.ci AS fatherCi,
    father.phone AS fatherPhone,
    father.email AS fatherEmail,
    mother.id AS motherId,
    mother.name AS motherName,
    mother.lastName AS motherLastName,
    mother.ci AS motherCi,
    mother.phone AS motherPhone,
    mother.email AS motherEmail,
    tutor.id AS tutorId,
    tutor.name AS tutorName,
    tutor.lastName AS tutorLastName,
    tutor.ci AS tutorCi,
    tutor.phone AS tutorPhone,
    tutor.email AS tutorEmail
    from students
    LEFT JOIN studentdata ON students.id = studentdata.studentId
    LEFT JOIN parents father ON studentdata.fatherId = father.id
    LEFT JOIN parents mother ON studentdata.motherId = mother.id
    LEFT JOIN parents tutor ON studentdata.tutorId = tutor.id
    WHERE students.name LIKE "%${name}%" OR students.lastName LIKE "%${lastName}%" OR students.ci LIKE "%${ci}%"
    LIMIT ${limit} OFFSET ${offset};`

  const student = await sequelize.query(sqlQuery, { type: QueryTypes.SELECT })
  return student
}
