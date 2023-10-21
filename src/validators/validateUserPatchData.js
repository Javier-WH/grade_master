// this file contains a function that validate user data before sing up
import joi from 'joi'
import { userDataConst, userValidationMessages } from '../utils/const.js'
const { passwordMinLength, passwordRegex } = userDataConst
const { passwordErrorMessages, emailError } = userValidationMessages

export default function validateUserPatchData (userData) {
  const singUpSchema = joi.object({
    password: joi.string().regex(passwordRegex).min(passwordMinLength).messages(passwordErrorMessages),
    email: joi.string().email().messages(emailError)
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
