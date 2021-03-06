const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const database = require('../config/database')

exports.reg = function (req, res) {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  if (!username || !password || !email) {
    return res.status(400).json({
      message: 'Please fill data!'
    })
  } else {
    const sqlCheck = 'SELECT * FROM user WHERE user_name = ? OR user_email = ? LIMIT 1'
    database.query(sqlCheck, [username, email], (err, result) => {
      if (err) throw err

      if (result.length === 1) {
        if (result[0].user_name === username) {
          return res.status(400).json({
            message: 'Username is already used'
          })
        } else {
          return res.status(400).json({
            message: 'Email is already used'
          })
        }
      } else {
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)

        const sql = 'INSERT INTO user (user_name, user_password, user_email) VALUES (?, ?, ?)'
        database.query(sql, [username, hash, email], (err, result) => {
          if (err) throw err

          return res.status(200).json({
            message: 'Register successfully'
          })
        })
      }
    })
  }
}

exports.login = function (req, res) {
  if (req.user.error) {
    return res.status(400).json({
      message: 'Invalid username or password'
    })
  } else {
    const { username, id } = req.user
    const token = jwt.sign({ username, id }, 'userAccount')
    return res.status(200).json({ id, username, token })
  }
}

exports.facebook = async (req, res) => {
  console.log('Request -->', req.body.user)
  const accessToken = req.body.user.accessToken
  const username = req.body.user.name
  const email = req.body.user.email

  try {
    const response = await axios.get(`https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=597030604753073&client_secret=59c05e2dee7f790458d69a8cd8eaebf3&fb_exchange_token=${accessToken}`)
    const resulted = response.data

    const verify = await axios.get(`https://graph.facebook.com/me?access_token=${resulted.access_token}`)
    if (verify) {
      const sqlCheck = 'SELECT * FROM user WHERE user_name = ? OR user_email = ? LIMIT 1'
      database.query(sqlCheck, [username, email], async (err, result) => {
        if (err) {
          throw err
        }
        if (result.length === 0) {
          const sql = 'INSERT INTO user (user_name, user_email) VALUES (?,?)'
          database.query(sql, [username, email], async (err, result2) => {
            if (err) {
              throw err
            } else {
              database.query(sqlCheck, [username, email], (err, result3) => {
                if (err) {
                  throw err
                } else {
                  const id = result3[0].user_id
                  const token = jwt.sign({ username, email }, 'userAccount')
                  return res.status(200).json({ token, username, email, id })
                }
              })
            }
          })
        } else {
          const id = result[0].user_id
          const token = jwt.sign({ username, email }, 'userAccount')
          return res.status(200).json({ token, username, email, id })
        }
      })
    }
  } catch (error) {
    return res.status(400).json({ message: 'Error!' })
  }
}

exports.google = function (req, res) {
  const username = req.body.name
  const email = req.body.email
  const sqlCheck = 'SELECT * FROM user WHERE user_name = ? OR user_email = ? LIMIT 1'
  database.query(sqlCheck, [username, email], async (err, result) => {
    if (err) {
      throw err
    }
    if (result.length === 0) {
      const sql = 'INSERT INTO user (user_name, user_email) VALUES (?,?)'
      database.query(sql, [username, email], async (err, result2) => {
        if (err) {
          throw err
        } else {
          database.query(sqlCheck, [username, email], (err, result3) => {
            if (err) {
              throw err
            } else {
              const id = result3[0].user_id
              const token = jwt.sign({ username, email }, 'userAccount')
              return res.status(200).json({ token, username, email, id })
            }
          })
        }
      })
    } else {
      const id = result[0].user_id
      const token = jwt.sign({ username, email }, 'userAccount')
      return res.status(200).json({ token, username, email, id })
    }
  })
}

// exports.loginFacebook = function(req, res) {
//         console.log('User =', req.user);
//         const{username, id} = req.user;
//         const token = jwt.sign({username, id}, 'userAccount');

//         res.redirect('http://localhost:3000/home')
//         // return res.status(200).json({token, username, id})
// }
