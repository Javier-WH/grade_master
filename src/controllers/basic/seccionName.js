import putSeccionName from '../../SQL/Querys/basic/putSeccionName.js'
import ErrorHandler from '../../errors/errorHandler.js'
export default async function seccionName (req, res) {
  try {
    const id = await putSeccionName(req.body)
    res.status(200).send(id)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
