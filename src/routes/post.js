import express from 'express'

const router = express.Router()

router.post('/login', async (req, res) => {
  res.status(200).send('hola')
})

router.post('/singup', async (req, res) => {
  res.status(200).send('hola')
})

export default router
