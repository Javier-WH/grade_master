import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Seccion from '../basics/seccion.js'

class Student extends Model { }

Student.init(
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
      allowNull: false
    },
    ci: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idSeccion: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Seccion,
        key: 'id'
      }
    },
    failed: {
      type: DataTypes.TINYINT,
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
    timestamps: false
  }
)

export default Student
