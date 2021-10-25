const express = require('express')
const test = require('../routes/main.route')
const passport = require('./passport')
const app = express()

module.exports = () => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    passport()
    app.use('/api', test)
    
    const listen = (port) => {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
    }

    return {listen}
}

