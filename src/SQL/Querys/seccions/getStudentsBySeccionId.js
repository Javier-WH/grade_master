import Student from '../../../models/students/student.js'

export default async function getStudentsBySeccionId (seccionId) {
  const students = await Student.findAll({
    where: {
      idSeccion: seccionId
    }
  })

  return students
}
