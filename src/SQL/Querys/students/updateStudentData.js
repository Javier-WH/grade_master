import StudentData from '../../../models/students/studentData.js'

export default async function updateStudentData (data) {
  const { studentId } = data

  const isRegistered = await StudentData.findOne({ where: { studentId } })

  // si esta registrado, actualiza
  if (isRegistered) {
    await StudentData.update(
      data,
      {
        where: {
          studentId
        }
      }
    )
    return 'actualizados'
  } else {
    await StudentData.create(data)
    return 'registrados'
  }
}
