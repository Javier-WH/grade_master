import AcademicYear from '../../../models/basics/academicYears.js'
import LapseName from '../../../models/basics/lapseName.js'
import Period from '../../../models/basics/period.js'
import SeccionName from '../../../models/basics/seccionsName.js'
import SubjectName from '../../../models/basics/subjecName.js'
import Subjec from '../../../models/basics/subject.js'

export default async function getBasics () {
  const academicYears = await AcademicYear.findAll({ raw: true })
  const lapseName = await LapseName.findAll({ raw: true })
  const period = await Period.findAll({ raw: true })
  const seccionName = await SeccionName.findAll({ raw: true })
  const subjecName = await SubjectName.findAll({ raw: true })
  const subject = await Subjec.findAll({ raw: true })

  return {
    academicYears,
    lapseName,
    period,
    seccionName,
    subjecName,
    subject
  }
}
