import express from 'express'
import deleteUser from '../controllers/user/deleteUser.js'
const router = express.Router()

router.delete('/user/:id', async (req, res) => {
  const response = await deleteUser(req.params.id)

  if (response === 0) {
    return res.status(422).send('No se pudo eliminar el usuario')
  }

  res.status(204).send('Se ha eliminado correctamente el usuario')
})

export default router
