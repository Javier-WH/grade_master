import Seccions from '../models/seccions.js'

export default async function getSeccions () {
  const list = await Seccions.findAll({ raw: true })
  return list
}
