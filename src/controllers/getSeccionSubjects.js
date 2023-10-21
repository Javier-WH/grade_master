import SeccionSubject from '../models/seccion_subject.js'

export default async function getSectionSubjects ({ idAcademicYear, idSeccion, idSubject }) {
  const data = {}

  if (idAcademicYear) {
    data.id_AcademicYear = idAcademicYear
  }
  if (idSeccion) {
    data.id_Seccion = idSeccion
  }
  if (idSubject) {
    data.id_Subject = idSubject
  }

  const subjects = await SeccionSubject.findAll({
    where: data,
    raw: true
  })
  return subjects
}
