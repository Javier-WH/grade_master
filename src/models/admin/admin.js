import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import User from '../user/user.js'

class Admin extends Model { }

Admin.init(
  {
    idUser: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true,
      references: {
        model: User,
        key: 'id'
      },
      field: 'idUser'
    }
  },
  {
    sequelize,
    modelName: 'Admin',
    tableName: 'admins',
    timestamps: false
  }
)

export default Admin
