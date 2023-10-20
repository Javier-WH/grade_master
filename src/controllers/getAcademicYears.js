import AcademicYear from '../models/academic_year.js'

export default async function getAcademicYears () {
  const list = await AcademicYear.findAll({ raw: true })
  return list
}
