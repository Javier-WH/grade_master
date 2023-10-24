import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import Seccion from './seccion.js'
import SubjectName from './subjecName.js'
import User from '../user/user.js'

class Subject extends Model { }

Subject.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      unique: true,
      primaryKey: true
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
    idSubjectName: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: SubjectName,
        key: 'id'
      },
      field: 'idSubjectName'
    },
    idUser: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      },
      field: 'idUser'
    }
  },
  {
    sequelize,
    modelName: 'Subject',
    tableName: 'subjects',
    timestamps: false
  }
)

export default Subject
