const route = require('express').Router()
const passport = require('passport')
const userController = require('../controllers/user.controller')
const songController = require('../controllers/song.controller')

route.post('/reg', userController.reg)
route.post('/login', passport.authenticate('basic', {session: false}),userController.login)

route.post('/addFav', songController.addFav)
route.get('/getFav/:id', songController.getFav)
route.delete('/deleteFav/:id/:user_id', songController.deleteFav)


module.exports = route