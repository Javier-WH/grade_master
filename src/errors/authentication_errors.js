export class AuthenticationError extends Error {
  constructor () {
    super()
    this.name = 'AuthenticationError'
    this.message = 'El usuario o la contraseña suministrados son invalidos'
    this.code = 'ER_REJECT_USER'
  }
}

export class UserNotFoundError extends Error {
  constructor () {
    super()
    this.name = 'UserNotFoundError'
    this.message = 'Usuario no encontrado'
    this.code = 'ER_NOT_FOUND_USER'
  }
}

export class MissingDataError extends Error {
  constructor () {
    super()
    this.name = 'MissingDataError'
    this.message = 'No se han suministrado los datos requeridos'
    this.code = 'ER_MISS_DATA'
  }
}
