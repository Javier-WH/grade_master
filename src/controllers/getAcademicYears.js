import AcademicYear from '../models/grades.js'

export default async function getAcademicYears () {
  const list = await AcademicYear.findAll({ raw: true })
  return list
}
