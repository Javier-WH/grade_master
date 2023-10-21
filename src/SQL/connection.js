import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const port = process.env.DB_PORT
const host = process.env.DB_HOST

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql',
  ssl: false,
  logging: false,
  define: {
    underscored: true,
    freezeTableName: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  }
})
sequelize.sync({ alter: true, force: false }).then(() => {
  console.log('Database synchronized')
}).catch(error => {
  console.error('An error occurred while synchronizing the database', error)
})

export default sequelize
