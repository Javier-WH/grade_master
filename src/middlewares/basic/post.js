import express from 'express'

const router = express.Router()

router.post('/addsubject', express.json(), (req, res, next) => {
  next()
})

router.post('/subject/setUser', express.json(), (req, res, next) => {
  next()
})

export default router
