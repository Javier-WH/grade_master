import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Subject from '../basics/subject.js'
import LapseName from '../basics/lapseName.js'

class EvaluationPlan extends Model { }

EvaluationPlan.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    idSubject: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Subject,
        key: 'id'
      },
      field: 'idSubject'
    },
    idLapse: {
      type: DataTypes.CHAR(36),
      references: {
        model: LapseName,
        key: 'id'
      },
      field: 'idLapse'
    }
  },
  {
    sequelize,
    modelName: 'EvaluationPlan',
    tableName: 'evaluationPlan',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['idSubject', 'idLapse']
      }
    ]
  }
)

export default EvaluationPlan
