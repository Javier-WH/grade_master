import Joi from 'joi'

export default function validateEvalPlanData (userData) {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/
  const dateFilter = Joi.string().regex(dateRegex)
  const percentFilter = Joi.number().positive().min(1).max(100)
  const descFilter = Joi.string()

  const singUpSchema = Joi.object({
    id: Joi.string().uuid(),
    idSubject: Joi.string().uuid(),
    idLapse: Joi.string().uuid(),
    dates: Joi.object({
      eval1: dateFilter,
      eval2: dateFilter,
      eval3: dateFilter,
      eval4: dateFilter,
      eval5: dateFilter,
      eval6: dateFilter,
      eval7: dateFilter,
      eval8: dateFilter,
      eval9: dateFilter,
      eval10: dateFilter
    }),
    percents: Joi.object({
      eval1: percentFilter,
      eval2: percentFilter,
      eval3: percentFilter,
      eval4: percentFilter,
      eval5: percentFilter,
      eval6: percentFilter,
      eval7: percentFilter,
      eval8: percentFilter,
      eval9: percentFilter,
      eval10: percentFilter
    }),
    desc: Joi.object({
      eval1: descFilter,
      eval2: descFilter,
      eval3: descFilter,
      eval4: descFilter,
      eval5: descFilter,
      eval6: descFilter,
      eval7: descFilter,
      eval8: descFilter,
      eval9: descFilter,
      eval10: descFilter
    })
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(userData)
}
