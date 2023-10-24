import Student from '../../models/students/student.js'

export default async function getStudentsBySeccionId (seccionId) {
  try {
    const students = await Student.findAll({
      where: {
        idSeccion: seccionId
      }
    })

    return students
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
