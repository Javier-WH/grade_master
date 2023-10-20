import Subjects from '../models/subjects.js'

export default async function getSubjects () {
  const list = await Subjects.findAll({ raw: true })
  return list
}
