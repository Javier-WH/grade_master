import joi from 'joi'

export default function validateAcademicYearsData (userData) {
  const singUpSchema = joi.object({
    idStudent: joi.string().uuid().required(),
    idEvaluationPlan: joi.string().uuid().required(),
    eval1: joi.number().min(0).max(20),
    eval2: joi.number().min(0).max(20),
    eval3: joi.number().min(0).max(20),
    eval4: joi.number().min(0).max(20),
    eval5: joi.number().min(0).max(20),
    eval6: joi.number().min(0).max(20),
    eval7: joi.number().min(0).max(20),
    eval8: joi.number().min(0).max(20),
    eval9: joi.number().min(0).max(20),
    eval10: joi.number().min(0).max(20)
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
