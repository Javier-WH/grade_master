import Seccion from '../../../models/basics/seccion.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetSeccion ({ page }) {
  const offset = (page - 1) * limit

  const sqlRequest = await Seccion.findAll(
    {
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
