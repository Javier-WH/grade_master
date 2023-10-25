import errorHandler from '../../errors/errorHandler.js'
import _upDateSeccion from '../../SQL/Querys/seccions/updateSeccion.js'

export default async function updateSeccion (req, res) {
  try {
    const data = {
      id: req.params.id,
      idSeccionName: req.body.idSeccionName,
      idAcademicYear: req.body.idAcademicYear,
      idPeriod: req.body.idPeriod
    }

    await _upDateSeccion(data)
    res.status(200).send(req.body)
  } catch (error) {
    const { message, code } = errorHandler(error)
    res.status(code).send(message)
  }
}
