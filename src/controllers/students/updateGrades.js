import ErrorHandler from '../../errors/errorHandler.js'
import UpdateGrades from '../../SQL/Querys/students/updateGrades.js'

export default async function updateGrades (req, res) {
  try {
    await UpdateGrades(req.body)
    res.status(200).send('Notas Actualizadas')
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
