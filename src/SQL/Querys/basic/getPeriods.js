import Period from '../../../models/basics/period.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetPeriods ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await Period.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
