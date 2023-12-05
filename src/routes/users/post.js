import express from 'express'
import login from '../../controllers/user/login.js'
import signup from '../../controllers/user/signup.js'
import registerUserData from '../../controllers/user/registerUserData.js'
import findUserData from '../../controllers/user/findUserData.js'
import updateUserData from '../../controllers/user/updateUserData.js'
import updateUserPassword from '../../controllers/user/updateUserPassword.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/userData', registerUserData)
router.post('/getUserData')
router.post('/getUserData', findUserData)
router.post('/updateUserData', updateUserData)
router.post('/updateUserPass', updateUserPassword)

export default router
