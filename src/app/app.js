import express from 'express'

import notFound from '../routes/notFound.js'
import seccion from '../routes/seccions/seccions.js'
import user from '../routes/users/users.js'
import basic from '../routes/basic/basic.js'
import evalPlan from '../routes/evalPlan/evalPlan.js'
const app = express()
app.disable('x-powered-by')

// routes
app.use(seccion)
app.use(user)
app.use(basic)
app.use(evalPlan)
app.use(notFound)

export default app
