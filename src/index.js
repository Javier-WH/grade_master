import app from './app/app.js'
import getLocalIp from './utils/get_local_ip.js'
import dotenv from 'dotenv'
import getStudentsBySubjectId from './SQL/Querys/seccions/getStudentsBySubjectId.js'
dotenv.config()

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? getLocalIp()

app.listen(port, 0, err => {
  if (err) {
    console.log('Ha ocurrido un error -> ', err)
    return
  }
  console.clear()
  console.log(`Server listening on address -> http://${host}:${port}`)
  getStudentsBySubjectId('b2d4c98a-1a0e-4d8b-9d2c-96de4f7f13e1')
})
