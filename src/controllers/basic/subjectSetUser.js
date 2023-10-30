import subjectSetUser from '../../SQL/Querys/basic/subjectSetUser.js'
import ErrorHandler from '../../errors/errorHandler.js'
export default async function SubjectSetUser (req, res) {
  try {
    const id = await subjectSetUser(req.body)
    res.status(200).send(id)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
