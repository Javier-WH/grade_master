import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import User from './user.js'

class UserData extends Model { }

UserData.init(
  {
    userId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      },
      field: 'userId'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ci: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'UserData',
    tableName: 'userData',
    timestamps: false
  }
)

export default UserData
