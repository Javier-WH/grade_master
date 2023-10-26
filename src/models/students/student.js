import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Seccion from '../basics/seccion.js'
import Failed from './failed.js'

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
      allowNull: false,
      field: 'lastName'
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
      },
      field: 'idSeccion'
    },
    failed: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      defaultValue: null,
      references: {
        model: Failed,
        key: 'id'
      },
      field: 'failed'
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
