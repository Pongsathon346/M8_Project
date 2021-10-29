const route = require('express').Router()
const passport = require('passport')

const userController = require('../controllers/user.controller')
const songController = require('../controllers/song.controller')

route.post('/reg', userController.reg)
route.post('/login', passport.authenticate('basic', {session: false}),userController.login)
route.post('/signin/facebook', userController.facebook)
route.post('/signin/google', userController.google)

route.post('/addFav', passport.authenticate('jwt',{session: false}), songController.addFav)
route.get('/getFav/:id', passport.authenticate('jwt',{session: false}), songController.getFav)
route.delete('/deleteFav/:id/:user_id', passport.authenticate('jwt',{session: false}), songController.deleteFav)

module.exports = route