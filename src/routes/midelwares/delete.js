import validateData from '../../validators/validatePatchDeleteData.js'

import express from 'express'

const router = express.Router()

router.delete('/user/:id', async (req, res, next) => {
  const userId = validateData(req)

  if (userId.error) {
    return res.status(userId.code).send(userId.error)
  }

  next()
})
export default router
