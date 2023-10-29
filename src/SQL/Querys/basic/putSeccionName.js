import SeccionName from '../../../models/basics/seccionsName.js'
import { v4 as uuidv4 } from 'uuid'

export default async function putSeccionName ({ id, name, active }) {
  if (id) {
    const data = {}
    if (name) {
      data.name = name
    }
    if (active !== null || active !== undefined) {
      data.active = active
    }
    await SeccionName.update(
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
  await SeccionName.create(
    {
      id,
      name
    }
  )
  return id
}
