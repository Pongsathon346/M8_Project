const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
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
        clientID: 976194982932030,
        clientSecret: 'ff28853d33d1801edc3a6eefcdb35ea0',
        callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        
      }
    ));
}