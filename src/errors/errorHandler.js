export default function errorManager (error) {
  let message = 'Error'
  let code = 500

  if (error.name === 'SequelizeConnectionError' || error.name === 'SequelizeValidationError') {
    message = 'Error de conexión con la base de datos'
    code = 500
  } else if (error.name === 'SequelizeUniqueConstraintError' || error.name === 'SequelizeForeignKeyConstraintError') {
    message = 'Error de violación de restricción única'
    code = 400
  } else if (error.name === 'MissingDataError') {
    message = error.message
    code = 400
  } else if (error.name === 'AuthenticationError' || error.name === 'UserNotFoundError') {
    message = error.message
    code = 401
  } else if (error.name === 'NotFoundError') {
    message = error.message
    code = 404
  }
  console.log(error)
  return {
    message,
    code
  }
}
