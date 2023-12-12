import StudentData from '../../../models/students/studentData.js'

export default async function getStudentData ({ studentId }) {
  const studentData = await StudentData.findOne({ where: { studentId } })
  return studentData
}
