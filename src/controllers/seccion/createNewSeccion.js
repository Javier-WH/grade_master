import _createNewSeccion from '../../SQL/Querys/seccions/createNewSeccion.js'
import errorHandler from '../../errors/errorHandler.js'

export default async function createNewSeccion (req, res) {
  try {
    const seccionData = await _createNewSeccion(req.body)
    res.status(200).json(seccionData)
  } catch (error) {
    const { message, code } = errorHandler(error)
    res.status(code).send(message)
  }
}
