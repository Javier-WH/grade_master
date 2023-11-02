import Subjec from '../../../models/basics/subject.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetSubjec ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await Subjec.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
