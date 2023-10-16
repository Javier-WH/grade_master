import express from 'express'
import { authenticateUser } from '../controllers/authenticate_user.js'
import singUpUser from '../controllers/singUpUser.js'
import { AuthenticationError } from '../errors/authentication_errors.js'
import { DataBaseConectionError, DuplicateValues } from '../errors/dataBaseConectionError.js'
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const token = await authenticateUser(req.body)
    res.status(200).send(token)
  } catch (error) {
    if (error instanceof AuthenticationError) {
      res.status(401).send(error.message)
      return
    }
    if (error instanceof DataBaseConectionError) {
      res.status(503).send(error.message)
      return
    }
    console.log(error)
    res.status(500)
  }
})

router.post('/singup', async (req, res) => {
  try {
    const id = await singUpUser(req.body)
    res.status(200).send(id)
  } catch (error) {
    if (error instanceof DataBaseConectionError) {
      return res.status(503).send(error.message)
    }
    if (error instanceof DuplicateValues) {
      return res.status(409).json({ message: error.message, fields: error.fields })
    }
    console.log(error)
    res.status(500)
  }
})

export default router
