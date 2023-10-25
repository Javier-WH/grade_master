import Seccion from '../../../models/basics/seccion.js'
export default async function deleteSeccion ({ id }) {
  await Seccion.destroy(
    {
      where: { id }
    }
  )
}
