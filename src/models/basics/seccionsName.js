import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class SeccionName extends Model { }

SeccionName.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: 'SeccionName',
    tableName: 'seccionsNames',
    timestamps: false
  }
)

export default SeccionName
