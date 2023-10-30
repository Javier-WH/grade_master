import putPeriod from '../../SQL/Querys/basic/putPeriod.js'
import ErrorHandler from '../../errors/errorHandler.js'
export default async function period (req, res) {
  try {
    const id = await putPeriod(req.body)
    res.status(200).send(id)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
