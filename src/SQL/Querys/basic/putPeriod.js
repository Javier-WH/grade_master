import Period from '../../../models/basics/period.js'
import { v4 as uuidv4 } from 'uuid'

export default async function putPeriod ({ id, period }) {
  if (id) {
    const data = {}
    if (period) {
      data.period = period
    }
    await Period.update(
      data,
      {
        where: {
          id
        }
      }
    )
    return id
  }
  id = uuidv4()
  await Period.create(
    {
      id,
      period
    }
  )
  return id
}
