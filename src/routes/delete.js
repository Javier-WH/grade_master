import express from 'express'
import { validate as validateUUID } from 'uuid'
import verificateToken from '../utils/tokenReader.js'
import deleteUser from '../controllers/deleteUser.js'
const router = express.Router()

router.delete('/user/:id', async (req, res) => {
  const userId = req.params.id
  const authorization = req.get('authorization')
  const currentTimestamp = Math.floor(Date.now() / 1000)

  // check if id is a valid uuid and have and autorization token
  if (!validateUUID(userId) || authorization === undefined) {
    return res.status(400).send('Los datos suministrados son incorrectos')
  }

  // check if the token belongs to the sender and it is not expired
  const token = verificateToken(authorization)
  if (token === null || token.id !== userId || token.exp < currentTimestamp) {
    return res.status(401).send('acceso denegado')
  }

  const response = await deleteUser(userId)
  if (response === 0) {
    return res.status(422).send('No se pudo eliminar el usuario')
  }
  res.status(204).send('Se ha eliminado correctamente el usuario')
})

export default router
