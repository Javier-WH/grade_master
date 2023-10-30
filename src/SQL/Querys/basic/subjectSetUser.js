import Subject from '../../../models/basics/subject.js'

export default async function subjectSetUser ({ id, idUser }) {
  await Subject.update(
    {
      idUser
    },
    {
      where: {
        id
      }
    }
  )
  return id
}
