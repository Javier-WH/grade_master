import express from 'express'
import notFound from '../routes/notFound.js'
import seccion from '../routes/seccions/seccions.js'
import user from '../routes/users/users.js'
import basic from '../routes/basic/basic.js'
import evalPlan from '../routes/evalPlan/evalPlan.js'
import students from '../routes/students/students.js'
import parents from '../routes/parents/parents.js'
import config from '../routes/config/config.js'
import cors from 'cors'

const app = express()
app.disable('x-powered-by')

app.options('*', cors())
app.use(cors({
  origin: '*'
}))

// routes
app.use(seccion)
app.use(user)
app.use(basic)
app.use(evalPlan)
app.use(students)
app.use(parents)
app.use(config)
app.use(notFound)

export default app
