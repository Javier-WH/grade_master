import SubjectName from '../../../models/basics/subjecName.js'
import { v4 as uuidv4 } from 'uuid'

export default async function putSubjectName ({ id, name, active }) {
  if (id) {
    const data = {}
    if (name) {
      data.name = name
    }
    if (active !== null || active !== undefined) {
      data.active = active
    }
    await SubjectName.update(
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
  await SubjectName.create(
    {
      id,
      name
    }
  )
  return id
}
