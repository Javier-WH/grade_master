import express from 'express'
import { authenticateUser } from '../controllers/authenticate_user.js'
import singUpUser from '../controllers/singUpUser.js'
import errorManager from '../errors/errorManager.js'
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const { id, token } = await authenticateUser(req.body)
    res.set('Authorization', `Bearer ${token}`)
    res.status(200).send(id)
  } catch (error) {
    return errorManager(error, res)
  }
})

router.post('/singup', async (req, res) => {
  try {
    const id = await singUpUser(req.body)
    res.status(200).send(id)
  } catch (error) {
    return errorManager(error, res)
  }
})

export default router
