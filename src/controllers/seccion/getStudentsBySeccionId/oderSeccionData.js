export default function oderSeccionData (sqlRequest) {
  const students = sqlRequest.map(student => {
    // cleans nulls values
    const cleanStudent = Object.entries(student).reduce((acc, [key, value]) => {
      if (value !== null) {
        acc[key] = value
      }
      return acc
    }, {})
    return cleanStudent
  })
  return students
}
