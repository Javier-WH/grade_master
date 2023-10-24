import { Model, DataTypes } from 'sequelize'
import sequelize from '../../SQL/connection.js'

class AcademicYear extends Model { }

AcademicYear.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'AcademicYear',
    tableName: 'academicyears',
    timestamps: false
  }
)

export default AcademicYear
