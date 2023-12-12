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
      },
      field: 'studentId'
    },
    fatherId: {
      type: DataTypes.CHAR(36),
      defaultValue: null,
      references: {
        model: Parents,
        key: 'id'
      },
      field: 'fatherId'
    },
    motherId: {
      type: DataTypes.CHAR(36),
      defaultValue: null,
      references: {
        model: Parents,
        key: 'id'
      },
      field: 'motherId'
    },
    tutorId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Parents,
        key: 'id'
      },
      field: 'tutorId'
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      field: 'birthDate'
    }
  },
  {
    sequelize,
    modelName: 'StudentData',
    tableName: 'studentData',
    timestamps: false
  }
)

export default StudentData
