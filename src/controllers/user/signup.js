import registerUser from '../../SQL/Querys/user/registerUser.js'
import errorHandler from '../../errors/errorHandler.js'
export default async function signup (req, res) {
  try {
    await registerUser(req.body)
    res.status(201).send('Usuario registrado')
  } catch (error) {
    const { code, message } = errorHandler(error)
    res.status(code).send(message)
  }
}
