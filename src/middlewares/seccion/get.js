import express from 'express'
const router = express.Router()

router.get('/seccion', express.json(), (req, res, next) => {
  next()
})

export default router
