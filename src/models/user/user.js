import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  }
)

export default User
