import Config from '../../../models/config/config.js'

export default async function setConfig ({ name, value }) {
  const nameExist = await Config.findOne({ where: { name }, raw: true })

  if (nameExist) {
    await Config.update({ value }, { where: { name } })
  } else {
    await Config.create({ name, value })
  }
}
