const route = require('express').Router()
const passport = require('passport')
const user = require('../controllers/user.controller')

// route.post('/facebook', user.facebook)

route.get('/facebook', passport.authenticate('facebook'))

route.get('/facebook/callback',
    passport.authenticate('facebook', { 
        session: false,
        failureRedirect: 'http://localhost:3000' 
    }), user.loginFacebook
    
    
)

// route.get('/facebook/callback', passport.authenticate('facebook',{session: false}));

module.exports = route