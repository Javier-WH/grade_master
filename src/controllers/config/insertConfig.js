import ErrorHandler from '../../errors/errorHandler.js'
import { MissingDataError } from '../../errors/authentication_errors.js'
import setConfig from '../../SQL/Querys/config/setConfig.js'

export default async function insertConfig (req, res) {
  try {
    const configList = req.body
    if (!configList || configList.length === 0) {
      throw new MissingDataError()
    }
    for (const config of configList) {
      await setConfig(config)
    }
    res.status(200).send('Datos actualizados')
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
