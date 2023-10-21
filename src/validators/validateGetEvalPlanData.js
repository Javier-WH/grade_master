// this file contains a function that validate evalplan data before it used
import joi from 'joi'
import { userValidationMessages } from '../const/const.js'
const { uuidErrorMessages } = userValidationMessages

export default function validateGetEvalPlanData (userData) {
  const singUpSchema = joi.object({
    id_academic_year: joi.string().uuid().required().messages(uuidErrorMessages),
    id_seccion: joi.string().uuid().required().messages(uuidErrorMessages),
    id_subject: joi.string().uuid().required().messages(uuidErrorMessages),
    lapse: joi.number().valid(1, 2, 3).required()

  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
