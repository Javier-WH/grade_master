import _getStudentsBySeccionId from '../../SQL/Querys/seccions/getStudentsBySeccionId.js'
import errorHandler from '../../errors/errorHandler.js'

export default async function getStudentsBySeccionId (req, res) {
  try {
    const studentList = await _getStudentsBySeccionId(req.body.id)
    res.status(200).json(studentList)
  } catch (error) {
    const { message, code } = errorHandler(error)
    res.status(code).send(message)
  }
}
