import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Student from './student.js'
import EvaluationPlan from '../evaluationPlan/evaluationPlan.js'

class Grade extends Model { }

Grade.init(
  {
    idStudent: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Student,
        key: 'id'
      }
    },
    idEvaluationPlan: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: EvaluationPlan,
        key: 'id'
      }
    },
    eval1: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval2: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval3: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval4: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval5: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval6: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval7: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval8: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval9: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    eval10: {
      type: DataTypes.FLOAT,
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'Grade',
    tableName: 'grades',
    timestamps: false
  }
)

export default Grade
