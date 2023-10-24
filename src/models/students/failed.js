import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Student from './student.js'

class Failed extends Model { }

Failed.init(
  {
    idStudent: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
      references: {
        model: Student,
        key: 'id'
      }
    },
    subject1: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject2: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject3: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject4: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject5: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject6: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject7: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject8: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject9: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    },
    subject10: {
      type: DataTypes.CHAR(36),
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'Failed',
    tableName: 'failed',
    timestamps: false
  }
)

export default Failed
