import { AuthenticationError } from './authentication_errors.js'
import { DataBaseConectionError, DuplicateValues } from './dataBaseConectionError.js'

export default function errorManager (error, res) {
  let response = res.status(500)

  if (error instanceof AuthenticationError) {
    response = res.status(401).send(error.message)
  } else if (error instanceof DuplicateValues) {
    response = res.status(409).json({ message: error.message, fields: error.fields })
  } else if (error instanceof DataBaseConectionError) {
    response = res.status(503).send(error.message)
  }

  return response
}
