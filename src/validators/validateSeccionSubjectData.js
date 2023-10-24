// this file contains a function that validate seccion and subject data
import joi from 'joi'
import { userValidationMessages } from '../const/const.js'
const { uuidErrorMessages } = userValidationMessages

export default function validateSeccionSubjectData (userData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid().required().messages(uuidErrorMessages)
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
