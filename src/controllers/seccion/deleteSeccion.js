import errorHandler from '../../errors/errorHandler.js'
import _deleteSeccion from '../../SQL/Querys/seccions/deleteSeccion.js'
export default async function deleteSeccion (req, res) {
  try {
    await _deleteSeccion(req.params)
    res.status(204).send()
  } catch (error) {
    const { message, code } = errorHandler(error)
    res.status(code).send(message)
  }
}
