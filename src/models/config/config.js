import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class Config extends Model { }

Config.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.CHAR(255),
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
