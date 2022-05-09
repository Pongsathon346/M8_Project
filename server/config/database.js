const pg = require('pg')

const connect = pg.createConnection({
  host: 'localhost',
  user: 'postgres',
  password: '1q2w3e',
  database: 'lyric_database'
})

module.exports = connect
