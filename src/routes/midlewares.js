import validateUserData from '../utils/validateUserData.js'
import validateSingUpData from '../utils/validateSingUpData.js'
import express from 'express'

const router = express.Router()

router.use(express.json())

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

export default router
