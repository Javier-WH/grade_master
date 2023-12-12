import joi from 'joi'

export default function validateParentsData (parentData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid(),
    name: joi.string(),
    lastName: joi.string(),
    ci: joi.number(),
    phone: joi.number(),
    email: joi.string().email()

  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(parentData)
}
