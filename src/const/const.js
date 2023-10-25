export const userDataConst = {
  userMinLength: 3,
  userRegex: /^[a-zA-Z0-9]+$/,
  passwordMinLength: 8,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/
}

export const userValidationMessages = {
  userErrorMessages: {
    'string.pattern.base': 'El usuario no puede tener caracteres especiales, solo letras y numeros',
    'string.min': `El usuario debe tener al menos ${userDataConst.userMinLength} caracteres`,
    'any.required': 'No ha suministrado un nombre de usuario'
  },

  passwordErrorMessages: {
    'string.pattern.base': 'Al menos 8 caracteres de longitud, Debe contener al menos una letra minúscula, Debe contener al menos una letra mayúscula, Debe contener al menos un número, Puede contener caracteres especiales.',
    'string.min': `La contraseña debe tener al menos ${userDataConst.passwordMinLength} caracteres`,
    'any.required': 'No ha suministrado una contraseña'
  },

  uuidErrorMessages: {
    'string.base': 'El campo "id" debe ser una cadena',
    'string.guid': 'El campo "id" debe ser un UUID válido',
    'any.required': 'El campo "id" es requerido'
  },
  emailError: {
    'string.base': 'El campo "email" debe ser una cadena',
    'string.email': 'El campo "email" debe ser un correo electrónico válido',
    'any.required': 'El campo "email" es requerido'
  }
}

export const baseRoutes = {
  seccion: '/seccion'
}
