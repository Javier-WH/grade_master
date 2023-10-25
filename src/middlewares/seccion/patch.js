import express from 'express'
const router = express.Router()

router.patch('/:id', express.json(), (req, res, next) => next())

export default router
