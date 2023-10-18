export class AuthenticationError extends Error {
  constructor () {
    super()
    this.name = 'AuthenticationError'
    this.message = 'El usuario o la contraseña suministrados son invalidos'
    this.code = 'ER_REJECT_USER'
  }
}
