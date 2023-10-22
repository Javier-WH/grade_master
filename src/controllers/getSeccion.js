import Parents from '../models/parents/parents.js'
import Tutors from '../models/tutors/tutors.js'
import Students from '../models/students/students.js'
import StudentsSeccion from '../models/students/student_secctions.js'
import Grades from '../models/students/student_grades.js'
import sequelize from '../SQL/connection.js'

export default async function getSeccion ({ idAcademicYear, idSeccion }) {
  const QUERY = 'SELECT students.id, students.name, students.last_name, students.ci, students.parents, students.tutor, studentsseccions.id_academic_year, studentsseccions.id_seccion ' +
                'FROM students ' +
                'JOIN studentsseccions ON students.id = studentsseccions.id_student ' +
                `WHERE studentsseccions.id_academic_year = '${idAcademicYear}' ` +
                `AND studentsseccions.id_seccion = '${idSeccion}';`

  const studentList = await sequelize.query(QUERY, { type: sequelize.QueryTypes.SELECT })

  if (studentList.length === 0) {
    return null
  }

  const reformedStudentList = {
    id_academic_year: studentList[0].id_academic_year,
    id_seccion: studentList[0].id_seccion,
    studentList: studentList.map(student => ({
      id: student.id,
      name: student.name,
      last_name: student.last_name,
      ci: student.ci,
      parents: student.parents,
      tutor: student.tutor
    }))
  }
  return reformedStudentList
}
