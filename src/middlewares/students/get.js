import express from 'express'
const router = express.Router()

router.get('/photo', express.urlencoded(), (req, res, next) => next())

export default router
