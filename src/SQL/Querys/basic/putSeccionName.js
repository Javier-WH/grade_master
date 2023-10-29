import SeccionName from '../../../models/basics/seccionsName.js'
import { v4 as uuidv4 } from 'uuid'

export default async function putSeccionName ({ id, name }) {
  if (id) {
    await SeccionName.update(
      {
        name
      },
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
