import Subject from '../../../models/basics/subject.js'
import { v4 as uuidv4 } from 'uuid'

export default async function createSubject ({ idSeccion, idSubjectName, idUser }) {
  const id = uuidv4()
  const data = {
    id,
    idSeccion,
    idSubjectName
  }

  if (idUser) {
    data.idUser = idUser
  }

  await Subject.create(data)
  return idSeccion
}
