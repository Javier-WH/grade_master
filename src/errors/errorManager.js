export default function errorManager (error, res) {
  if (error.original && error.original.code === 'ER_DUP_ENTRY') {
    res.status(409).send('El usuario, el id o el email ya estan registrados')
  } else if (error.code === 'ER_REJECT_USER') {
    res.status(401).send(error.message)
  } else {
    console.log(error)
    res.status(500).send(error.name)
  }
}
