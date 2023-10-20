import SeccionSubject from '../models/seccion_subject.js'

export default async function getSectionSubjects ({ idAcademicYear, idSeccion }) {
  const subjects = await SeccionSubject.findAll({
    where: {
      id_AcademicYear: idAcademicYear,
      id_Seccion: idSeccion
    },
    raw: true
  })
  return subjects
}
