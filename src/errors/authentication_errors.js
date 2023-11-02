class CustomError extends Error {
  constructor (name, message, code) {
    super(message)
    this.name = name
    this.code = code
  }
}

export class AuthenticationError extends CustomError {
  constructor (message) {
    super('AuthenticationError', message || 'El usuario o la contraseña suministrados son inválidos', 'ER_REJECT_USER')
  }
}

export class UserNotFoundError extends CustomError {
  constructor (message) {
    super('UserNotFoundError', message || 'Usuario no encontrado', 'ER_NOT_FOUND_USER')
  }
}

export class MissingDataError extends CustomError {
  constructor (message) {
    super('MissingDataError', message || 'No se han suministrado los datos requeridos', 'ER_MISS_DATA')
  }
}

export class NotFoundError extends CustomError {
  constructor (message) {
    super('NotFoundError', message || 'El recurso solicitado no existe', 'ER_NOT_FOUND')
  }
}
