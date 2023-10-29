import joi from 'joi'
import { userDataConst } from '../../const/const.js'
const { seccionNameRegex } = userDataConst

export default function validateSeccionNameData (seccionData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid(),
    name: joi.string().regex(seccionNameRegex),
    active: joi.boolean()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(seccionData)
}
