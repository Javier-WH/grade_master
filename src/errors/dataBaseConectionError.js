export class DataBaseConectionError extends Error {
  constructor () {
    super()
    this.name = 'DataBaseConectionError'
    this.message = 'Ha ocurrido un error durante la conexion a la Base de Datos'
  }
}

export class DuplicateValues extends Error {
  constructor (values) {
    super()
    this.name = 'DuplicateValues'
    this.message = 'Los datos suministrados ya están registrados'
    this.fields = values
  }
}
