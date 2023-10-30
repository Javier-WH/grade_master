import ErrorHandler from '../../errors/errorHandler.js'
import createSubject from '../../SQL/Querys/basic/createSubject.js'

export default async function CreateSubject (req, res) {
  try {
    const data = await createSubject(req.body)
    res.status(200).send(data)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
