import joi from 'joi'

export default function validateAcademicYearsData (userData) {
  const singUpSchema = joi.object({
    idStudent: joi.string().uuid().required(),
    idEvaluationPlan: joi.string().uuid().required(),
    eval1: joi.number().min(0).max(20).allow(null),
    eval2: joi.number().min(0).max(20).allow(null),
    eval3: joi.number().min(0).max(20).allow(null),
    eval4: joi.number().min(0).max(20).allow(null),
    eval5: joi.number().min(0).max(20).allow(null),
    eval6: joi.number().min(0).max(20).allow(null),
    eval7: joi.number().min(0).max(20).allow(null),
    eval8: joi.number().min(0).max(20).allow(null),
    eval9: joi.number().min(0).max(20).allow(null),
    eval10: joi.number().min(0).max(20).allow(null)
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
