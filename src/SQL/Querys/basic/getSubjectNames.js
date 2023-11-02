import SubjecName from '../../../models/basics/subjecName.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetSubjecName ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await SubjecName.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
