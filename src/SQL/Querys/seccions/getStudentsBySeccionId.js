import Student from '../../../models/students/student.js'

export default async function getStudentsBySeccionId (idSeccion) {
  const students = await Student.findAll({
    where: {
      idSeccion
    }
  })

  return students
}
