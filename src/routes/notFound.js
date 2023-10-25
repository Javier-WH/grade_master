import Express from 'express'
const router = Express.Router()

router.all('*', (req, res) => {
  res.status(400).send('Recurso no encontrado')
})

export default router
