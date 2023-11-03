import sequelize from '../../connection.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function getSubjectByUser ({ userId, page }) {
  const offset = (page - 1) * limit
  const query = `SELECT 
 subjects.id AS "idSubject", 
 subjectsnames.name AS "subjectName", 
 subjects.idSeccion AS "idSeccion", 
 seccionsnames.name AS "seccionName", 
 academicyears.id AS "idAcademicYear", 
 academicyears.name AS "academicYearName",
 period.id AS "idPeriod", 
 period.period AS "periodName", 
 evaluationplan.idLapse AS "idLapse", 
 lapsename.name AS "lapseName", 
 evalplanpercents.eval1 AS "percent1", 
 evalplanpercents.eval2 AS "percent2", 
 evalplanpercents.eval3 AS "percent3", 
 evalplanpercents.eval4 AS "percent4", 
 evalplanpercents.eval5 AS "percent5", 
 evalplanpercents.eval6 AS "percent6", 
 evalplanpercents.eval7 AS "percent7", 
 evalplanpercents.eval8 AS "percent8", 
 evalplanpercents.eval9 AS "percent9", 
 evalplanpercents.eval10 AS "percent10", 
 evalplandates.eval1 AS "date1", 
 evalplandates.eval2 AS "date2", 
 evalplandates.eval3 AS "date3", 
 evalplandates.eval4 AS "date4", 
 evalplandates.eval5 AS "date5", 
 evalplandates.eval6 AS "date6", 
 evalplandates.eval7 AS "date7", 
 evalplandates.eval8 AS "date8", 
 evalplandates.eval9 AS "date9", 
 evalplandates.eval10 AS "date10", 
 evalplandescription.eval1 AS "desc1", 
 evalplandescription.eval2 AS "desc2", 
 evalplandescription.eval3 AS "desc3", 
 evalplandescription.eval4 AS "desc4", 
 evalplandescription.eval5 AS "desc5", 
 evalplandescription.eval6 AS "desc6", 
 evalplandescription.eval7 AS "desc7", 
 evalplandescription.eval8 AS "desc8", 
 evalplandescription.eval9 AS "desc9", 
 evalplandescription.eval10 AS "desc10" 
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
  LIMIT ${limit} OFFSET ${offset}`

  const request = await sequelize.query(query)
  return request[0]
}
