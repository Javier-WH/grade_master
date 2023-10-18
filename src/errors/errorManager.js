export default function errorManager (error, res) {
  if (error.original && error.original.code === 'ER_DUP_ENTRY') {
    res.status(409).send('El usuario, el id o el email ya estan registrados')
  } else if (error.code === 'ER_REJECT_USER') {
    res.status(401).send(error.message)
  } else if (error.code === 'ER_NOT_FOUND_USER') {
    res.status(404).send(error.message)
  } else if (error.code === 'ER_MISS_DATA') {
    res.status(400).send(error.message)
  } else {
    console.log(error)
    res.status(500).send(error.name)
  }
}
