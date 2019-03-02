const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const app = express()

//const data = require('./db/data')
const routes = require('./routes')

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(routes)

app.listen(5000, () => {
    console.log(`Slušam port ${port}`);
})