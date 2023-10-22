import { DataTypes, Model } from 'sequelize'
import sequelize from '../../SQL/connection.js'

export default class FailedStudent extends Model { }

FailedStudent.init(
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
    sbject1: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject2: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject3: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject4: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject5: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject6: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject7: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject8: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject9: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    },
    sbject10: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: true,
      references: {
        model: 'Subjects',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'FailedStudent',
    tableName: 'failed_students'
  }
)
