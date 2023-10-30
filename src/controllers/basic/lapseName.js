import lapseName from '../../SQL/Querys/basic/lapseName.js'
import ErrorHandler from '../../errors/errorHandler.js'

export default async function LapseName (req, res) {
  try {
    const id = await lapseName(req.body)
    res.status(200).send(id)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
