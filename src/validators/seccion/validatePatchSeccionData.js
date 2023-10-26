import joi from 'joi'

export default function validatePatchSeccionData (userData) {
  const singUpSchema = joi.object({
    idSeccionName: joi.string().uuid(),
    idAcademicYear: joi.string().uuid(),
    idPeriod: joi.string().uuid()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
