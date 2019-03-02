const monk = require('monk')
const connString = 'localhost/programming_tips'

const db = monk(connString)

module.exports = db