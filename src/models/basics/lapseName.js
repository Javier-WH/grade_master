import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class LapseName extends Model { }

LapseName.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'LapseName',
    tableName: 'lapseName',
    timestamps: false
  }
)

export default LapseName
