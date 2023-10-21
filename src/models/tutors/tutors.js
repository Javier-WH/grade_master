import { DataTypes, Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../../SQL/connection.js'

export default class Tutors extends Model { }

Tutors.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ci: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'Tutors',
    tableName: 'tutors'
  }
)
