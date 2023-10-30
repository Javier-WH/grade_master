import putSubjectName from '../../SQL/Querys/basic/putSubjectName.js'
import ErrorHandler from '../../errors/errorHandler.js'
export default async function subjectName (req, res) {
  try {
    const id = await putSubjectName(req.body)
    res.status(200).send(id)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
