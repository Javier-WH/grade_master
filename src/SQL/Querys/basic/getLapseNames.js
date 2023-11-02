import Lapsename from '../../../models/basics/lapseName.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetLapseNames ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await Lapsename.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
