import Config from '../../../models/config/config.js'

export default async function getConfigList () {
  const config = await Config.findAll(
    {
      raw: true
    }
  )
  return config
}
