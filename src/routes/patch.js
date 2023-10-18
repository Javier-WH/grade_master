import express from 'express'
import validateUuid from '../utils/validatePatchDeleteData.js'
import updateUser from '../controllers/patchUser.js'
import errorManager from '../errors/errorManager.js'

const router = express.Router()

router.patch('/user/:id', async (req, res) => {
  const userId = validateUuid(req, res)

  if (userId.error) {
    return res.status(userId.code).send(userId.error)
  }

  try {
    const response = await updateUser({ id: userId, ...req.body })
    res.send(response)
  } catch (error) {
    return errorManager(error, res)
  }
})

export default router
