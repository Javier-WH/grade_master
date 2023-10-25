export default function errorManager (error) {
  console.log(error)
  let message = 'Error'
  let code = 500

  if (error.name === 'SequelizeConnectionError' || error.name === 'SequelizeValidationError') {
    message = 'Error de conexión con la base de datos'
    code = 500
  } else if (error.name === 'SequelizeUniqueConstraintError' || error.name === 'SequelizeForeignKeyConstraintError') {
    message = 'Error de violación de restricción única'
    code = 400
  }

  return {
    message,
    code
  }
}
