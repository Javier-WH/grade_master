import _getStudentsBySeccionId from '../../controllers/seccions/getStudentsBySeccionId.js'

export default async function getStudentsBySeccionId (req, res) {
  const studentList = await _getStudentsBySeccionId(req.body.id)
  res.status(200).json(studentList)
}
