import ErrorHandler from '../../errors/errorHandler.js'
import updateStudentData from '../../SQL/Querys/students/updateStudentData.js'

export default async function registerStudentData (req, res) {
  try {
    const action = await updateStudentData(req.body)
    res.status(200).send(`Datos del estudiante ${action}`)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
