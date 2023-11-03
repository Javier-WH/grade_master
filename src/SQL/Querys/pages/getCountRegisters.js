import sequelize from '../../connection.js'
import Student from '../../../models/students/student.js'
import { QueryTypes } from 'sequelize'
import AcademicYear from '../../../models/basics/academicYears.js'
import LapseName from '../../../models/basics/lapseName.js'
import Period from '../../../models/basics/period.js'
import Seccion from '../../../models/basics/seccion.js'
import SeccionName from '../../../models/basics/seccionsName.js'
import SubjectName from '../../../models/basics/subjecName.js'
import Subject from '../../../models/basics/subject.js'
import Grade from '../../../models/students/grade.js'

export async function seccionBySubjectRegisters ({ id }) {
  const query = `
SELECT COUNT(*) AS totalRegistros
FROM (
  SELECT
    students.id AS "studentId",
    students.name AS "studentName",
    students.lastName AS "studentLastName",
    students.ci AS "studentCi",
    students.idSeccion AS "seccionId",
    seccionsnames.name AS "seccionName",
    subjects.idSubjectName AS "subjectId",
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
    GROUP_CONCAT(grades.eval1 SEPARATOR "-") AS eval1,
    GROUP_CONCAT(grades.eval2 SEPARATOR "-") AS eval2,
    GROUP_CONCAT(grades.eval3 SEPARATOR "-") AS eval3,
    GROUP_CONCAT(grades.eval4 SEPARATOR "-") AS eval4,
    GROUP_CONCAT(grades.eval5 SEPARATOR "-") AS eval5,
    GROUP_CONCAT(grades.eval6 SEPARATOR "-") AS eval6,
    GROUP_CONCAT(grades.eval7 SEPARATOR "-") AS eval7,
    GROUP_CONCAT(grades.eval8 SEPARATOR "-") AS eval8,
    GROUP_CONCAT(grades.eval9 SEPARATOR "-") AS eval9,
    GROUP_CONCAT(grades.eval10 SEPARATOR "-") AS eval10
  FROM
    students
    JOIN subjects ON students.idSeccion = subjects.idSeccion
    JOIN subjectsnames ON subjects.idSubjectName = subjectsnames.id
    JOIN seccions ON subjects.idSeccion = seccions.id
    JOIN seccionsnames ON seccions.idSeccionName = seccionsnames.id
    JOIN users ON subjects.idUser = users.id
    LEFT JOIN evaluationplan ON evaluationplan.idSubject = subjects.id
    LEFT JOIN grades ON grades.idEvaluationPlan = evaluationplan.id
      AND grades.idStudent = students.id
    LEFT JOIN failed ON students.failed = failed.id
  WHERE
    subjects.id = '${id}'
  GROUP BY
    students.id
) AS subquery;
`

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })
  return request[0].totalRegistros
}

export async function seccionByIdRegisters ({ idSeccion }) {
  const result = await Student.count(
    {
      where: {
        idSeccion
      }
    }
  )
  return result
}

export async function subjectByUserId ({ userId }) {
  const query = `SELECT COUNT(*) AS totalRegistros
    FROM (
    SELECT
    subjects.id AS 'idSubject', 
    subjects.idSeccion AS 'idSeccion', 
    seccionsnames.name AS "seccionName",
    academicyears.id AS 'idAcademicYear',
    academicyears.name AS "academicYearName", 
    period.id AS 'idPeriod',
    period.period AS 'periodName',
    GROUP_CONCAT(evalplanpercents.eval1 SEPARATOR ":") AS percent1,
    GROUP_CONCAT(evalplanpercents.eval2 SEPARATOR ":") AS percent2,
    GROUP_CONCAT(evalplanpercents.eval3 SEPARATOR ":") AS percent3,
    GROUP_CONCAT(evalplanpercents.eval4 SEPARATOR ":") AS percent4,
    GROUP_CONCAT(evalplanpercents.eval5 SEPARATOR ":") AS percent5,
    GROUP_CONCAT(evalplanpercents.eval6 SEPARATOR ":") AS percent6,
    GROUP_CONCAT(evalplanpercents.eval7 SEPARATOR ":") AS percent7,
    GROUP_CONCAT(evalplanpercents.eval8 SEPARATOR ":") AS percent8,
    GROUP_CONCAT(evalplanpercents.eval9 SEPARATOR ":") AS percent9,
    GROUP_CONCAT(evalplanpercents.eval10 SEPARATOR ":") AS percent10,
    GROUP_CONCAT(evalplandates.eval1 SEPARATOR ":") AS date1,
    GROUP_CONCAT(evalplandates.eval2 SEPARATOR ":") AS date2,
    GROUP_CONCAT(evalplandates.eval3 SEPARATOR ":") AS date3,
    GROUP_CONCAT(evalplandates.eval4 SEPARATOR ":") AS date4,
    GROUP_CONCAT(evalplandates.eval5 SEPARATOR ":") AS date5,
    GROUP_CONCAT(evalplandates.eval6 SEPARATOR ":") AS date6,
    GROUP_CONCAT(evalplandates.eval7 SEPARATOR ":") AS date7,
    GROUP_CONCAT(evalplandates.eval8 SEPARATOR ":") AS date8,
    GROUP_CONCAT(evalplandates.eval9 SEPARATOR ":") AS date9,
    GROUP_CONCAT(evalplandates.eval10 SEPARATOR ":") AS date10,
    GROUP_CONCAT(evalplandescription.eval1 SEPARATOR ":") AS desc1,
    GROUP_CONCAT(evalplandescription.eval2 SEPARATOR ":") AS desc2,
    GROUP_CONCAT(evalplandescription.eval3 SEPARATOR ":") AS desc3,
    GROUP_CONCAT(evalplandescription.eval4 SEPARATOR ":") AS desc4,
    GROUP_CONCAT(evalplandescription.eval5 SEPARATOR ":") AS desc5,
    GROUP_CONCAT(evalplandescription.eval6 SEPARATOR ":") AS desc6,
    GROUP_CONCAT(evalplandescription.eval7 SEPARATOR ":") AS desc7,
    GROUP_CONCAT(evalplandescription.eval8 SEPARATOR ":") AS desc8,
    GROUP_CONCAT(evalplandescription.eval9 SEPARATOR ":") AS desc9,
    GROUP_CONCAT(evalplandescription.eval10 SEPARATOR ":") AS desc10
    from subjects
    JOIN subjectsnames ON subjectsnames.id = subjects.idSubjectName 
    JOIN seccions ON seccions.id = subjects.idSeccion 
    JOIN seccionsnames ON seccions.idSeccionName = seccionsnames.id 
    JOIN academicyears ON academicyears.id = seccions.idAcademicYear 
    JOIN period ON period.id = subjects.idPeriod
    LEFT JOIN evaluationplan ON evaluationplan.idSubject = subjects.id
    LEFT JOIN lapsename ON lapsename.id = evaluationplan.idLapse
    LEFT JOIN evalplanpercents ON evalplanpercents.idEvaluationPlan = evaluationplan.id 
    LEFT JOIN evalplandescription ON evalplandescription.idEvaluationPlan = evaluationplan.id 
    LEFT JOIN evalplandates ON evalplandates.idEvaluationPlan = evaluationplan.id 
    where subjects.idUser = '${userId}' 
    GROUP BY subjects.id) AS subquery;`

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })
  return request[0].totalRegistros
}

export async function academicYears () {
  const result = await AcademicYear.count()
  return result
}

export async function lapsename () {
  const result = await LapseName.count()
  return result
}

export async function period () {
  const result = await Period.count()
  return result
}
export async function seccion () {
  const result = await Seccion.count()
  return result
}

export async function seccionName () {
  const result = await SeccionName.count()
  return result
}
export async function subjecName () {
  const result = await SubjectName.count()
  return result
}
export async function subject () {
  const result = await Subject.count()
  return result
}

export async function grade () {
  const result = await Grade.count()
  return result
}
