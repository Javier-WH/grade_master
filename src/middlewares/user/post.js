import express from 'express'
const router = express.Router()

router.post('/', express.json(), (req, res, next) => {
  next()
})

router.post('/signup', express.json(), (req, res, next) => {
  next()
})
export default router
