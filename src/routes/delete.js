import express from 'express'

const router = express.Router()

router.delete('/user/:id', async (req, res) => {
  res.status(200).send('hola')
})

export default router
