import ErrorHandler from '../../errors/errorHandler.js'
import getConfigList from '../../SQL/Querys/config/getConfig.js'
import { NotFoundError } from '../../errors/authentication_errors.js'

export default async function getConfig (req, res) {
  try {
    const configData = await getConfigList()
    if (configData.length === 0) {
      throw new NotFoundError('No se ha encontrado ninguna configuracón')
    }
    res.status(200).json(configData)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
