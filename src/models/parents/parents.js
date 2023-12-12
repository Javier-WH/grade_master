import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class Parents extends Model { }

Parents.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'lastName'
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
    modelName: 'Parents',
    tableName: 'parents',
    timestamps: false
  }
)

export default Parents
