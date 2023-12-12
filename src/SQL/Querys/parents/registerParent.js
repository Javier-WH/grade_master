import Parents from '../../../models/parents/parents.js'
import { v4 as uuidv4 } from 'uuid'

export default async function registerParent (data) {
  let { id } = data

  if (!id) {
    id = id = uuidv4()
  }
  const parentExist = await Parents.findOne(
    {
      where: {
        id
      },
      raw: true
    }
  )

  if (!parentExist) {
    data.id = id
    await Parents.create(data)
    return 'registrado'
  } else {
    await Parents.update(
      data,
      {
        where: {
          id
        }
      }
    )
    return 'actualizado'
  }
}
