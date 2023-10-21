import { DataTypes, Model } from 'sequelize'
import sequelize from '../../SQL/connection.js'

export default class EvalPlanDescriptions extends Model { }

EvalPlanDescriptions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    evaluation_plan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'EvaluationPlans',
        key: 'id'

      }
    },
    eval1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval3: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval4: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval5: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval6: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval7: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval8: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval9: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    eval10: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: 'EvalPlanDescriptions',
    tableName: 'evalPlan_descriptions'
  }
)
