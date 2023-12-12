import GetStudentData from '../../SQL/Querys/students/getStudentData.js'
import ErrorHandler from '../../errors/errorHandler.js'

export default async function getStudentData (req, res) {
  try {
    const data = await GetStudentData(req.body)
    res.status(200).json(data)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
