export const userDataConst = {
  userMinLength: 3,
  userRegex: /^[a-zA-Z0-9]+$/,
  passwordMinLength: 8,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/,
  seccionNameRegex: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+(?:\d)?$/
}

export const baseRoutes = {
  seccion: '/seccion',
  user: '/user',
  basic: '/basic',
  evalPlan: '/evalPlan',
  students: '/students'
}

export const pageSize = 30
