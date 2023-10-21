// this file contains a function that validate user data before sing up
import joi from 'joi'
import { userDataConst, userValidationMessages } from '../const/const.js'
const { userMinLength, userRegex, passwordMinLength, passwordRegex } = userDataConst
const { userErrorMessages, passwordErrorMessages, uuidErrorMessages, emailError } = userValidationMessages

export default function validateSingUpData (userData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid().required().messages(uuidErrorMessages),
    user: joi.string().regex(userRegex).min(userMinLength).required().messages(userErrorMessages),
    password: joi.string().regex(passwordRegex).min(passwordMinLength).required().messages(passwordErrorMessages),
    email: joi.string().email().required().messages(emailError)

  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
