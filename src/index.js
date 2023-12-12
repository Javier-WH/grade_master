import app from './app/app.js'
import getLocalIp from './utils/get_local_ip.js'
import dotenv from 'dotenv'
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
})
