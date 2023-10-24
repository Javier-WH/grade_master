import validateSeccionSubjectData from '../../validators/validateSeccionSubjectData.js'
import validateGetEvalPlanData from '../../validators/validateGetEvalPlanData.js'
// import verificateToken from '../../utils/tokenReader.js'

// import errorManager from '../../errors/errorManager.js'
import express from 'express'

const router = express.Router()

/* router.get('*', async (req, res, next) => {
  try {
    const { id, user } = verificateToken(req.get('authorization')) ?? {}
    const userData = await getUser({ id, user })
    req.userData = userData
    next()
  } catch (error) {
    return errorManager(error, res)
  }
}) */

router.get('/seccion_subjects', express.json(), async (req, res, next) => {
  const { error, value } = validateSeccionSubjectData(req.body)
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }
  // remove unnecesary data
  req.body = {
    idAcademicYear: value.id_AcademicYear,
    idSeccion: value.id_Seccion
  }
  next()
})

router.get('/seccion', express.json(), async (req, res, next) => {
  const { error, value } = validateSeccionSubjectData(req.body)
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }
  // remove unnecesary data
  req.body = value
  next()
})

router.get('/evalplan', express.json(), async (req, res, next) => {
  const { error, value } = validateGetEvalPlanData(req.body)
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }
  // remove unnecesary data
  const data = {
    idAcademicYear: value.id_academic_year,
    idSeccion: value.id_seccion,
    idSubject: value.id_subject,
    lapse: value.lapse
  }
  req.body = data
  next()
})

export default router
