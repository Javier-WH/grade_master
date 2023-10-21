import { DataTypes, Model, UUIDV4 } from 'sequelize'
import sequelize from '../SQL/connection.js'

export default class SeccionSubject extends Model { }

SeccionSubject.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4(),
      primaryKey: true
    },
    id_AcademicYear: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'AcademicYears',
        key: 'id'
      }
    },
    id_Seccion: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Seccions',
        key: 'id'
      }
    },
    id_Subject: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    id_User: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'SeccionSubject',
    tableName: 'Seccion_subjects'
  }
)
