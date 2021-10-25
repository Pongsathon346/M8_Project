const connect = require('../config/database')


exports.reg = function(req, res) {
    const username = req.body.user_name;
    const email = req.body.user_email;
    const password = req.body.user_password;
    if(!username || !password || !email){
        return res.status(400).json({
            message: 'Please fill data!'
        })
    }else{
        const sqlCheck = "SELECT * FROM user WHERE user_name = ? OR user_email = ? LIMIT 1";
        connect.query(sqlCheck,[username, email], (err, result) => {
            if(err) throw err

            if (result.length == 1) {
                if(result[0].username === username){
                    return res.status(400).json({
                        message: 'Username is already used'
                    })
                }else{
                    return res.status(400).json({
                        message: 'Email is already used'
                    })
                }
            }else{
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);

                const sql = "INSERT INTO user (user_name, user_password, user_email) VALUES (?, ?, ?)"
                connect.query(sql,[username, hash, email], (err, result) => {
                    if(err) throw err

                    return res.status(200).json({
                        message: 'Register successfully'
                    });
                })
            }
        })
    }
};


