import express from 'express'
import createNewSeccion from '../../controllers/seccion/createNewSeccion.js'
const router = express.Router()

router.post('/', createNewSeccion)

export default router
