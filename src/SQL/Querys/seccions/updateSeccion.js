import Seccion from '../../../models/basics/seccion.js'
import { MissingDataError } from '../../../errors/authentication_errors.js'
export default async function updateSeccion ({ id, idSeccionName, idAcademicYear, idPeriod }) {
  const fields = {}

  if (idSeccionName) {
    fields.idSeccionName = idSeccionName
  }
  if (idAcademicYear) {
    fields.idAcademicYear = idAcademicYear
  }
  if (idPeriod) {
    fields.idPeriod = idPeriod
  }

  if (Object.keys(fields).length === 0) {
    throw new MissingDataError()
  }

  await Seccion.update(
    {
      idSeccionName,
      idAcademicYear,
      idPeriod
    },
    {
      where: {
        id
      }
    }
  )
}
