import express from 'express'
const router = express.Router()

router.get('/getConfig', (req, res, next) => {
  next()
})

export default router
