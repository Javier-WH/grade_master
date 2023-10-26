// this file contains a function that validate user data before it's used
import joi from 'joi'
import { userDataConst } from '../../const/const.js'
const { userMinLength, userRegex, passwordMinLength, passwordRegex } = userDataConst

export default function validateUserData (userData) {
  const userSchema = joi.object({
    user: joi.string().regex(userRegex).min(userMinLength).required().messages({
      'string.min': 'El Usuario debe tener al menos 8 caracteres',
      'string.pattern.base': 'El usuario no puede tener caracteres especiales'
    }),
    password: joi.string().regex(passwordRegex).min(passwordMinLength).required().messages({
      'string.pattern.base': 'La contraseña debe tener al menos 8 caracteres e incluir al menos una letra minúscula, una letra mayúscula y un dígito.'
    })
  }).options({ allowUnknown: true, stripUnknown: true })

  return userSchema.validate(userData)
}
