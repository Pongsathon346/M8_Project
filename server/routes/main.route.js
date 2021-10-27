const route = require('express').Router()
const user = require('./user.route')
const auth = require('./auth.route')


route.use('/routes', user)
route.use('/auth', auth)

module.exports = route