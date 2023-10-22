import { DataTypes, Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../SQL/connection.js'

export default class Seccion extends Model { }
Seccion.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Seccion',
    tableName: 'Seccions'
  }
)
