import joi from 'joi'

export default function validatePeriodData (seccionData) {
  const singUpSchema = joi.object({
    id: joi.string().uuid(),
    period: joi.string().required()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(seccionData)
}
