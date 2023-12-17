import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class Config extends Model { }

Config.init(
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
    value: {
      type: DataTypes.CHAR(36),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Config',
    tableName: 'config',
    timestamps: false
  }
)

export default Config
