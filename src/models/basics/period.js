import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class Period extends Model { }

Period.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    period: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Period',
    tableName: 'period',
    timestamps: false
  }
)

export default Period
