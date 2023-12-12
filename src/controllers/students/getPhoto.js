import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export default async function getPhoto (req, res) {
  const id = req.query.id
  const photoPath = `../../imgs/${id}.jpg`
  const _fileName = fileURLToPath(import.meta.url)
  const _dirname = dirname(_fileName)
  const filePath = join(_dirname, photoPath)

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
      res.statusCode = 404
      res.end('La foto no fue encontrada')
      return
    }

    // Establece las cabeceras de respuesta para indicar que se enviará una imagen
    res.setHeader('Content-Type', 'image/png')
    // Envía la foto como respuesta
    res.end(data)
  })
}
