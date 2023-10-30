import ErrorHandler from '../../errors/errorHandler.js'
import getBasics from '../../SQL/Querys/basic/getBasicData.js'

export default async function getBasicController (req, res) {
  try {
    const data = await getBasics()
    res.status(200).send(data)
  } catch (error) {
    const { code, message } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
