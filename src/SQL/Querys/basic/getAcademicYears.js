import AcademicYear from '../../../models/basics/academicYears.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetAcademicYears ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await AcademicYear.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
