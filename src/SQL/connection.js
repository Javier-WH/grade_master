import Sequelize from 'sequelize'

const database = 'grades'
const username = 'root'
const password = ''
const port = 3306
const host = '127.0.0.1'

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
sequelize.sync({ alter: true, force: true }).then(() => {
  console.log('Database synchronized')
}).catch(error => {
  console.error('An error occurred while synchronizing the database', error)
})

export default sequelize
