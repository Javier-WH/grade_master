import joi from 'joi'

export default function validatePostSeccionData (userData) {
  const singUpSchema = joi.object({
    idSeccionName: joi.string().uuid().required(),
    idAcademicYear: joi.string().uuid().required(),
    idPeriod: joi.string().uuid().required()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
