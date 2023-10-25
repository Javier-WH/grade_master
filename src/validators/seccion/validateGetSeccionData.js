import joi from 'joi'

export default function validateGetSeccionData (userData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid().required()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
