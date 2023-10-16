import express from 'express'
const router = express()

router.get('*', (req, res) => {
  res.status(404).send('Resourse not found, code:404')
})

export default router
