import joi from 'joi'

export default function validateAcademicYearsData (userData) {
  const singUpSchema = joi.object({
    page: joi.number().positive().required(),
    idPeriod: joi.string().uuid()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
