import joi from 'joi'

export default function validateGetSeccionData (id) {
  const singUpSchema = joi.object({
    id: joi.string().uuid().required(),
    page: joi.number().positive().required()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(id)
}
