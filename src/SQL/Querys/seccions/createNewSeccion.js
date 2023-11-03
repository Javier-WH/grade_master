import { v4 as uuidv4 } from 'uuid'
import Seccion from '../../../models/basics/seccion.js'

export default async function createNewSeccion ({ idSeccionName, idAcademicYear }) {
  const id = uuidv4()
  const seccionData = {
    id,
    idSeccionName,
    idAcademicYear
  }

  await Seccion.create(seccionData)
  return seccionData
}
