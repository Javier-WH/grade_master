import express from 'express'

const router = express.Router()

router.get('/basic', (req, res, next) => next())

export default router
