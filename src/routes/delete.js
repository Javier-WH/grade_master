import express from 'express'
import deleteUser from '../controllers/user/deleteUser.js'
import validateData from '../validators/validatePatchDeleteData.js'
const router = express.Router()

router.delete('/user/:id', async (req, res) => {
  const userId = validateData(req, res)

  if (userId.error) {
    return res.status(userId.code).send(userId.error)
  }

  const response = await deleteUser(userId)

  if (response === 0) {
    return res.status(422).send('No se pudo eliminar el usuario')
  }

  res.status(204).send('Se ha eliminado correctamente el usuario')
})

export default router
