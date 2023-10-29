import ErrorHandler from '../../errors/errorHandler.js'
import getSubjectByUser from '../../SQL/Querys/user/getSubjectByUser.js'

export default async function getSubjects (req, res) {
  try {
    const sqlRequest = await getSubjectByUser(req.body.id)
    const grupedSubjects = mergeSubject(sqlRequest)
    res.status(200).json(grupedSubjects)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}

function mergeObjectsByIdSubject (arr) {
  const mergedObjects = arr.reduce((acc, obj) => {
    if (acc[obj.idSubject]) {
      acc[obj.idSubject].evalPlan = {
        ...acc[obj.idSubject].evalPlan,
        ...obj.evalPlan
      }
    } else {
      acc[obj.idSubject] = obj
    }
    return acc
  }, {})

  const mergedArr = Object.values(mergedObjects)

  return mergedArr
}

function mergeSubject (arr) {
  const grupedSubjects = arr.map(subject => {
    const {
      idSubject,
      subjectName,
      idSeccion,
      seccionName,
      idAcademicYear,
      academicYearName,
      idPeriod,
      periodName,
      idLapse,
      lapseName,
      percent1, percent2, percent3, percent4, percent5, percent6, percent7, percent8, percent9, percent10,
      date1, date2, date3, date4, date5, date6, date7, date8, date9, date10,
      desc1, desc2, desc3, desc4, desc5, desc6, desc7, desc8, desc9, desc10
    } = subject

    const evalPlan = {}
    if (lapseName !== null) {
      evalPlan[lapseName] = {
        idLapse,
        ...(percent1 !== null && { percent1 }),
        ...(percent2 !== null && { percent2 }),
        ...(percent3 !== null && { percent3 }),
        ...(percent4 !== null && { percent4 }),
        ...(percent5 !== null && { percent5 }),
        ...(percent6 !== null && { percent6 }),
        ...(percent7 !== null && { percent7 }),
        ...(percent8 !== null && { percent8 }),
        ...(percent9 !== null && { percent9 }),
        ...(percent10 !== null && { percent10 }),
        ...(date1 !== null && { date1 }),
        ...(date2 !== null && { date2 }),
        ...(date3 !== null && { date3 }),
        ...(date4 !== null && { date4 }),
        ...(date5 !== null && { date5 }),
        ...(date6 !== null && { date6 }),
        ...(date7 !== null && { date7 }),
        ...(date8 !== null && { date8 }),
        ...(date9 !== null && { date9 }),
        ...(date10 !== null && { date10 }),
        ...(desc1 !== null && { desc1 }),
        ...(desc2 !== null && { desc2 }),
        ...(desc3 !== null && { desc3 }),
        ...(desc4 !== null && { desc4 }),
        ...(desc5 !== null && { desc5 }),
        ...(desc6 !== null && { desc6 }),
        ...(desc7 !== null && { desc7 }),
        ...(desc8 !== null && { desc8 }),
        ...(desc9 !== null && { desc9 }),
        ...(desc10 !== null && { desc10 })
      }
    }

    return {
      idSubject,
      subjectName,
      idSeccion,
      seccionName,
      idAcademicYear,
      academicYearName,
      idPeriod,
      periodName,
      ...(Object.keys(evalPlan).length > 0 && { evalPlan })

    }
  })

  return mergeObjectsByIdSubject(grupedSubjects)
}
