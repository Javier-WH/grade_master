import express from 'express'

import notFound from '../routes/notFound.js'
import seccion from '../routes/seccions/seccions.js'

const app = express()
app.disable('x-powered-by')

// routes
app.use(seccion)
app.use(notFound)

export default app
