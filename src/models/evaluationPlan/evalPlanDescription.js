import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import EvaluationPlan from './evaluationPlan.js'

class EvalPlanDescription extends Model { }

EvalPlanDescription.init(
  {
    idEvaluationPlan: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: EvaluationPlan,
        key: 'id'
      },
      field: 'idEvaluationPlan'
    },
    eval1: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval2: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval3: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval4: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval5: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval6: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval7: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval8: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval9: {
      type: DataTypes.STRING(255),
      defaultValue: null
    },
    eval10: {
      type: DataTypes.STRING(255),
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'EvalPlanDescription',
    tableName: 'evalPlanDescription',
    timestamps: false
  }
)

export default EvalPlanDescription
