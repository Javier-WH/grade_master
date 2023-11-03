import express from 'express'
import createNewSeccion from '../../controllers/seccion/createNewSeccion.js'
const router = express.Router()

router.post('/create', createNewSeccion) // crea una nueva seccion

export default router
