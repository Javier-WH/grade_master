import Subjec from '../../../models/basics/subject.js'
import { pageSize as limit } from '../../../const/const.js'

export default async function GetSubjec ({ page, idPeriod }) {
  const offset = (page - 1) * limit

  const sqlRequest = await Subjec.findAll(
    {
      attributes: ['id', 'idSeccion', 'idSubjectName', 'idUser'],
      where: { idPeriod },
      raw: true,
      limit,
      offset
    }

  )

  return sqlRequest
}
