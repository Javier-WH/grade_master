import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'
import SeccionName from './seccionsName.js'
import AcademicYear from './academicYears.js'
import Period from './period.js'

class Seccion extends Model { }

Seccion.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      unique: true,
      primaryKey: true
    },
    idSeccionName: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: SeccionName,
        key: 'id'
      }
    },
    idAcademicYear: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: AcademicYear,
        key: 'id'
      }
    },
    idPeriod: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Period,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Seccion',
    tableName: 'seccions',
    timestamps: false
  }
)

export default Seccion
