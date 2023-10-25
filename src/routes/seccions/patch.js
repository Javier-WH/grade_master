import express from 'express'
import updateSeccion from '../../controllers/seccion/updateSeccion.js'
const router = express.Router()

router.patch('/:id', updateSeccion)

export default router
