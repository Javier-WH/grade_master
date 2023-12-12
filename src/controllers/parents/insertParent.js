import ErrorHandler from '../../errors/errorHandler.js'
import registerParent from '../../SQL/Querys/parents/registerParent.js'

export default async function insertParent (req, res) {
  try {
    const action = await registerParent(req.body)
    res.status(200).send(`El usuario fue ${action} correctamente`)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
