import express from 'express'
import getRoutes from '.././routes/get.js'
import postRoutes from '.././routes/post.js'
import deleteRoutes from '.././routes/delete.js'
import patchRoutes from '.././routes/patch.js'
import notFound from '.././routes/not_found.js'
import patchMidlewares from '.././routes/midelwares/patch.js'
import getMidelwares from '.././routes/midelwares/get.js'
import postMidlewares from '.././routes/midelwares/post.js'
import deleteMidleware from '../routes/midelwares/delete.js'

const app = express()

app.disable('x-powered-by')
app.use(patchMidlewares)
app.use(getMidelwares)
app.use(postMidlewares)
app.use(deleteMidleware)
app.use(getRoutes)
app.use(postRoutes)
app.use(deleteRoutes)
app.use(patchRoutes)
app.use(notFound)

export default app
