import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import SeccionName from './seccionsName.js'
import AcademicYear from './academicYears.js'

class Seccion extends Model { }

Seccion.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    idSeccionName: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: SeccionName,
        key: 'id'
      },
      field: 'idSeccionName'
    },
    idAcademicYear: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: AcademicYear,
        key: 'id'
      },
      field: 'idAcademicYear'
    }
  },
  {
    sequelize,
    modelName: 'Seccion',
    tableName: 'seccions',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['idSeccionName', 'idAcademicYear']
      }
    ]
  }
)

export default Seccion
