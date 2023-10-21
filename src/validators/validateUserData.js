// this file contains a function that validate user data before it's used

import joi from 'joi'
import { userDataConst, userValidationMessages } from '../const/const.js'
const { userMinLength, userRegex, passwordMinLength, passwordRegex } = userDataConst
const { userErrorMessages, passwordErrorMessages } = userValidationMessages

export default function validateUserData (userData) {
  const userSchema = joi.object({
    user: joi.string().regex(userRegex).min(userMinLength).required().messages(userErrorMessages),
    password: joi.string().regex(passwordRegex).min(passwordMinLength).required().messages(passwordErrorMessages)
  }).options({ allowUnknown: true, stripUnknown: true })

  return userSchema.validate(userData)
}
