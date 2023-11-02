import Student from '../../../models/students/student.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function getStudentsBySeccionId ({ idSeccion, page }) {
  const offset = (page - 1) * limit
  const students = await Student.findAll(
    {
      where: {
        idSeccion
      },
      attributes: ['id', 'name', 'lastName', 'ci', 'failed'],
      raw: true,
      offset,
      limit

    })

  return students
}
