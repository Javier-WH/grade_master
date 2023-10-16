import express from 'express'
import getRoutes from './routes/get.js'
import postRoutes from './routes/post.js'
import notFound from './routes/not_found.js'
import midlewares from './routes/midlewares.js'
import getLocalIp from './utils/get_local_ip.js'

const app = express()
app.disable('x-powered-by')

app.use(midlewares)
app.use(getRoutes)
app.use(postRoutes)
app.use(notFound)

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
