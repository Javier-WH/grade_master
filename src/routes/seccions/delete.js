import express from 'express'
import deleteSeccion from '../../controllers/seccion/deleteSeccion.js'
const router = express.Router()

router.delete('/:id', deleteSeccion)

export default router
