import app from './app/app.js'
import getLocalIp from './utils/get_local_ip.js'

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? getLocalIp()

app.listen(port, host, err => {
  if (err) {
    console.log('Ha ocurrido un error -> ', err)
    return
  }
  console.clear()
  console.log(`Server listening on address -> http://${host}:${port}`)
})
