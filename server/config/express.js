const express = require('express')
const test = require('../routes/index.route')

const app = express()

module.exports = () => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.use('/api', test)
    
    const listen = (port) => {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
    }

    return {listen}
}

