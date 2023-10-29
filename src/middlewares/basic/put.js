import express from 'express'

const router = express.Router()

router.put('/seccionName', express.json(), (req, res, next) => {
  next()
})

export default router
