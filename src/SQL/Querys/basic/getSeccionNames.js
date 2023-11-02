import SeccionName from '../../../models/basics/subjecName.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetSeccionName ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await SeccionName.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
