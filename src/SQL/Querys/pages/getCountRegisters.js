import sequelize from '../../connection.js'
import { QueryTypes } from 'sequelize'
import AcademicYear from '../../../models/basics/academicYears.js'
import LapseName from '../../../models/basics/lapseName.js'
import Period from '../../../models/basics/period.js'
import Seccion from '../../../models/basics/seccion.js'
import SeccionName from '../../../models/basics/seccionsName.js'
import SubjectName from '../../../models/basics/subjecName.js'
import Subject from '../../../models/basics/subject.js'
import Grade from '../../../models/students/grade.js'

export async function seccionBySubjectRegisters ({ id, idPeriod }) {
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
       subjects.id = "${id}" AND subjects.idPeriod = "${idPeriod}" 
  GROUP BY
    students.id
) AS subquery;
`

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })
  return request[0].totalRegistros
}

export async function seccionByIdRegisters ({ idSeccion, idPeriod }) {
  const query = `SELECT COUNT(*) AS totalRegistros
                 FROM (
                  SELECT DISTINCT
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
                  ) AS subquery;`

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })

  return request[0].totalRegistros
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
export async function subject ({ idPeriod }) {
  const result = await Subject.count({ where: { idPeriod } })
  return result
}

export async function grade () {
  const result = await Grade.count()
  return result
}

export async function EvalPlan ({ idSubject }) {
  const query = `SELECT COUNT(*) AS totalRegistros
      FROM (
      SELECT  
        evaluationplan.id AS "idEvaluationPlan",
        evaluationplan.idSubject,
        evaluationplan.idLapse,
        evalplanpercents.eval1 AS "per1",
        evalplanpercents.eval2 AS "per2",
        evalplanpercents.eval3 AS "per3",
        evalplanpercents.eval4 AS "per4",
        evalplanpercents.eval5 AS "per5",
        evalplanpercents.eval6 AS "per6",
        evalplanpercents.eval7 AS "per7",
        evalplanpercents.eval8 AS "per8",
        evalplanpercents.eval9 AS "per9",
        evalplanpercents.eval10 AS "per10",
        evalplandescription.eval1 AS "desc1",
        evalplandescription.eval2 AS "desc2",
        evalplandescription.eval3 AS "desc3",
        evalplandescription.eval4 AS "desc4",
        evalplandescription.eval5 AS "desc5",
        evalplandescription.eval6 AS "desc6",
        evalplandescription.eval7 AS "desc7",
        evalplandescription.eval8 AS "desc8",
        evalplandescription.eval9 AS "desc9",
        evalplandescription.eval10 AS "desc10",
        evalplandates.eval1 AS "date1",
        evalplandates.eval2 AS "date2",
        evalplandates.eval3 AS "date3",
        evalplandates.eval4 AS "date4",
        evalplandates.eval5 AS "date5",
        evalplandates.eval6 AS "date6",
        evalplandates.eval7 AS "date7",
        evalplandates.eval8 AS "date8",
        evalplandates.eval9 AS "date9",
        evalplandates.eval10 AS "date10"
        FROM evaluationplan
        JOIN evalplanpercents ON evalplanpercents.idEvaluationPlan = evaluationplan.id
        JOIN evalplandescription ON evalplandescription.idEvaluationPlan = evaluationplan.id
        JOIN evalplandates ON evalplandates.idEvaluationPlan = evaluationplan.id
        WHERE evaluationplan.idSubject = '${idSubject}'
      ) AS subquery;`

  const request = await sequelize.query(query, { type: QueryTypes.SELECT })

  return request[0].totalRegistros
}

export async function GetStudent ({ name, lastname, ci }) {
  const placeHolder = 'Drunk Xenomorph'
  if (!name) {
    name = placeHolder
  }
  if (!lastname) {
    name = placeHolder
  }
  if (!ci) {
    name = placeHolder
  }

  const query = `
    SELECT COUNT(*) AS totalRegistros
    FROM (
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
    WHERE students.name LIKE "%${name}%" OR students.lastName LIKE "%${lastname}%" OR students.ci LIKE "%${ci}%"
    ) AS subquery;
  `
  const request = await sequelize.query(query, { type: QueryTypes.SELECT })
  return request[0]?.totalRegistros
}
