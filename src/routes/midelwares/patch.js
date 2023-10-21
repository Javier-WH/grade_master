import validateUserPatchData from '../../validators/validateUserPatchData.js'

import express from 'express'

const router = express.Router()

router.patch('*', express.json(), (req, res, next) => next())

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
