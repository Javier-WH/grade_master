import validateSeccionSubjectData from '../../validators/validateSeccionSubjectData.js'
import verificateToken from '../../utils/tokenReader.js'
import getUser from '../../controllers/user/getUser.js'
import errorManager from '../../errors/errorManager.js'
import express from 'express'

const router = express.Router()

router.get('*', async (req, res, next) => {
  try {
    const { id, user } = verificateToken(req.get('authorization')) ?? {}
    const userData = await getUser({ id, user })
    req.userData = userData
    next()
  } catch (error) {
    return errorManager(error, res)
  }
})

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

export default router
