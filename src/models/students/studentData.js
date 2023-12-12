import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Student from './student.js'
import Parents from '../parents/parents.js'

class StudentData extends Model { }

StudentData.init(
  {
    studentId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Student,
        key: 'id'
      }
    },
    fatherId: {
      type: DataTypes.CHAR(36),
      defaultValue: null,
      references: {
        model: Parents,
        key: 'id'
      }
    },
    motherId: {
      type: DataTypes.CHAR(36),
      defaultValue: null,
      references: {
        model: Parents,
        key: 'id'
      }
    },
    tutorId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Parents,
        key: 'id'
      }
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.CHAR(36),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'StudentData',
    tableName: 'studentData',
    timestamps: false
  }
)

export default Student
