
const route = require('express').Router()
const passport = require('../config/passport')
const userController = require('../controllers/user.controller')
require('../config/passport')

route.post('/reg', userController.reg)



module.exports = route