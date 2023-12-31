import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class SubjectName extends Model { }

SubjectName.init(
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
    modelName: 'SubjectName',
    tableName: 'subjectsNames',
    timestamps: false
  }
)

export default SubjectName
