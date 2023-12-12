import joi from 'joi'

export default function validateStudentData (studentData) {
  const singUpSchema = joi.object({
    studentId: joi.string().uuid().required(),
    fatherId: joi.string().uuid().allow(null),
    motherId: joi.string().uuid().allow(null),
    tutorId: joi.string().uuid().required(),
    gender: joi.string().required(),
    birthDate: joi.string().required()
  }).options({ allowUnknown: true, stripUnknown: true })

  return singUpSchema.validate(studentData)
}
