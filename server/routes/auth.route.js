const route = require('express').Router()
const passport = require('passport')

route.get('/facebook',passport.authenticate('facebook'))

route.get('/auth/facebook/callback', passport.authenticate('facebook',{session: false}));

module.exports = route