import validateUserData from '../utils/validateUserData.js'
import validateSingUpData from '../utils/validateSingUpData.js'
import validateUserPatchData from '../utils/validateUserPatchData.js'
import verificateToken from '../utils/tokenReader.js'
import getUser from '../controllers/getUser.js'
import errorManager from '../errors/errorManager.js'
import express from 'express'

const router = express.Router()

router.post('*', express.json(), (req, res, next) => next())
router.patch('*', express.json(), (req, res, next) => next())

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

// validate login, require user and password
router.post('/login', (req, res, next) => {
  const { error, value } = validateUserData(req.body)

  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }
  // remove unnecesary data
  req.body = value
  next()
})

// validate sing up data
router.post('/singup', async (req, res, next) => {
  const { error, value } = validateSingUpData(req.body)
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }
  req.body = value
  next()
})

// validate user patch data
router.patch('/user/:id', async (req, res, next) => {
  const { error, value } = validateUserPatchData(req.body)

  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ')
    res.status(400).send(errorMessage)
    return
  }

  req.body = value
  next()
})

export default router
