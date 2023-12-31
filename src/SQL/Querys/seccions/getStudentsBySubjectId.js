import sequelize from '../../connection.js'
import { pageSize } from '../../../const/const.js'

export default async function getStudentsBySubjectId ({ id, page, idPeriod }) {
  const offset = (page - 1) * pageSize

  const query = `SELECT 
    students.id AS "studentId", 
    students.name AS "studentName", 
    students.lastName AS "studentLastName", 
    students.ci AS "studentCi", 
    students.idSeccion AS "seccionId", 
    seccionsnames.name AS "seccionName", 
    subjects.id AS "subjectId", 
    subjectsnames.name AS "subjecName", 
    subjects.idUser AS "teacherId", 
    students.failed, 
    failed.subject1, 
    failed.subject2, 
    failed.subject3, 
    failed.subject4, 
    failed.subject5, 
    failed.subject6, 
    failed.subject7, 
    failed.subject8, 
    failed.subject9, 
    failed.subject10, 
    GROUP_CONCAT(lapsename.id SEPARATOR ":") AS lapseid, 
    GROUP_CONCAT(lapsename.name SEPARATOR ":") AS lapsename, 
    GROUP_CONCAT(grades.eval1 SEPARATOR ":") AS eval1, 
    GROUP_CONCAT(grades.eval2 SEPARATOR ":") AS eval2, 
    GROUP_CONCAT(grades.eval3 SEPARATOR ":") AS eval3, 
    GROUP_CONCAT(grades.eval4 SEPARATOR ":") AS eval4, 
    GROUP_CONCAT(grades.eval5 SEPARATOR ":") AS eval5, 
    GROUP_CONCAT(grades.eval6 SEPARATOR ":") AS eval6, 
    GROUP_CONCAT(grades.eval7 SEPARATOR ":") AS eval7, 
    GROUP_CONCAT(grades.eval8 SEPARATOR ":") AS eval8, 
    GROUP_CONCAT(grades.eval9 SEPARATOR ":") AS eval9, 
    GROUP_CONCAT(grades.eval10 SEPARATOR ":") AS eval10 
    FROM students 
    JOIN subjects ON students.idSeccion = subjects.idSeccion 
    JOIN subjectsnames ON subjects.idSubjectName = subjectsnames.id 
    JOIN seccions ON subjects.idSeccion = seccions.id 
    JOIN seccionsnames ON seccions.idSeccionName = seccionsnames.id 
    JOIN users ON subjects.idUser = users.id 
    LEFT JOIN evaluationplan ON evaluationplan.idSubject = subjects.id 
    LEFT JOIN grades ON grades.idEvaluationPlan = evaluationplan.id 
    AND grades.idStudent = students.id 
    LEFT JOIN failed ON students.failed = failed.id  
    LEFT JOIN lapsename ON lapsename.id = evaluationplan.idLapse 
    WHERE 
    subjects.id = "${id}" AND subjects.idPeriod = "${idPeriod}" 
    GROUP BY 
    students.id 
    ORDER BY 
    students.id 
    LIMIT ${pageSize} OFFSET ${offset}`

  const result = await sequelize.query(query)

  return result[0]
}
