import getUserByUserAndPassword from '../../SQL/Querys/user/getUserByUserAndPassword.js'
import ErrorHandler from '../../errors/errorHandler.js'

export default async function login (req, res) {
  try {
    const user = await getUserByUserAndPassword(req.body)
    res.status(200).json(user)
  } catch (error) {
    const { message, code } = ErrorHandler(error)
    res.status(code).send(message)
  }
}
