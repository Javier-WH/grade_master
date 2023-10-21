import { DataTypes, Model, UUIDV4 } from 'sequelize'
import sequelize from '../../SQL/connection.js'

export default class EvaluationPlan extends Model {}

EvaluationPlan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4(),
      primaryKey: true
    },
    seccion_subject_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Seccion_subjects',
        key: 'id'
      }
    },
    lapse: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  },
  {
    sequelize,
    modelName: 'EvaluationPlan',
    tableName: 'EvaluationPlans'
  }
)
