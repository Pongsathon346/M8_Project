const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt')
const connect = require('../config/database')


module.exports = () => {
    passport.use(new BasicStrategy((username, password, done) => {
        const sql = "SELECT * FROM user WHERE user_name = ? LIMIT 1"
        connect.query(sql, [username], (err, result) => {
            if(err) throw err
    
            if(result.length === 0){
                done(null, false);
            }else {
                const userPassword = result[0].user_password;
                if(!bcrypt.compareSync(password, userPassword)){
                    return done(null, {
                        error: true
                    })
                }else {
                    done(null, {
                        id: result[0].user_id,
                        username: result[0].user_name
                    })
                }
            }
        })
    }));

    passport.use(new FacebookStrategy({
        clientID: "597030604753073",
        clientSecret: "59c05e2dee7f790458d69a8cd8eaebf3",
        callbackURL: "http://localhost:5000/api/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'name', 'email'],
        passReqToCallback: true,
      },
      function(req, accessToken, refreshToken, profile, done) {
        try {
            if (profile) {
                req.user = profile
                done(null, profile)
            }
        } catch (error) {
            done(error)
        }
      }
    )
);

    // passport.use(new JwtStrategy({
    //     jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
    //     secretOrKey = 'secret'
    // }, (payload, done) => {

    // }));

}