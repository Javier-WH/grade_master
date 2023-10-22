import { DataTypes, Model } from 'sequelize'

import sequelize from '../../SQL/connection.js'

export default class StudentsSeccion extends Model {}

StudentsSeccion.init(
  {
    id_student: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    id_academicYear: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'AcademicYears',
        key: 'id'
      }
    },
    id_seccion: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Seccions',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'StudentsSeccion',
    tableName: 'studentsseccions'
  }
)
