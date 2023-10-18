import { DataTypes, Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../SQL/connection.js'

export default class Subject extends Model { }
Subject.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'Subject',
    tableName: 'Subjects'
  }
)
