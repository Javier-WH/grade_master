import sequelize from '../../connection.js'
import { QueryTypes } from 'sequelize'
import { pageSize as limit } from '../../../const/const.js'

export default async function getEvalPlan ({ page, idSubject }) {
  const offset = (page - 1) * limit

  const query = `SELECT
    evaluationplan.id AS "idEvaluationPlan",
    evaluationplan.idSubject,
    evaluationplan.idLapse,
    evaluationplan.idSubject,
    evalplanpercents.eval1 as "per1",
    evalplanpercents.eval2 as "per2",
    evalplanpercents.eval3 as "per3",
    evalplanpercents.eval4 as "per4",
    evalplanpercents.eval5 as "per5",
    evalplanpercents.eval6 as "per6",
    evalplanpercents.eval7 as "per7",
    evalplanpercents.eval8 as "per8",
    evalplanpercents.eval9 as "per9",
    evalplanpercents.eval10 as "per10",
    evalplandescription.eval1 as "desc1",
    evalplandescription.eval2 as "desc2",
    evalplandescription.eval3 as "desc3",
    evalplandescription.eval4 as "desc4",
    evalplandescription.eval5 as "desc5",
    evalplandescription.eval6 as "desc6",
    evalplandescription.eval7 as "desc7",
    evalplandescription.eval8 as "desc8",
    evalplandescription.eval9 as "desc9",
    evalplandescription.eval10 as "desc10",
    evalplandates.eval1 as "date1",
    evalplandates.eval2 as "date2",
    evalplandates.eval3 as "date3",
    evalplandates.eval4 as "date4",
    evalplandates.eval5 as "date5",
    evalplandates.eval6 as "date6",
    evalplandates.eval7 as "date7",
    evalplandates.eval8 as "date8",
    evalplandates.eval9 as "date9",
    evalplandates.eval10 as "date10"
    FROM evaluationplan
    JOIN evalplanpercents ON evalplanpercents.idEvaluationPlan = evaluationplan.id
    JOIN evalplandescription ON evalplandescription.idEvaluationPlan = evaluationplan.id
    JOIN evalplandates ON evalplandates.idEvaluationPlan = evaluationplan.id
    WHERE evaluationplan.idSubject = "${idSubject}"
    LIMIT ${limit} OFFSET ${offset};`

  const students = await sequelize.query(query, { type: QueryTypes.SELECT })

  return students
}
