const express = require("express")
const routes = express.Router()
const db = require('./db/connection')
const db_utils = require('./db/db_utils')

//Home route
routes.get('/', (req, res) => {
    const obj = {
        message: 'Ovo je iz routes!!!'
    }
    res.json(obj)
})

/**** Rute za jezike i slično ****/
routes.post('/insert_languages', (req, res) => {
    const jezici = req.body
    //data.insertLanguage(jezici)
    const languages = 'languages'
    db_utils.insertData(db, languages, jezici)
    res.send("Ok")
})

routes.get('/insert_languages', (req, res) => {
    const languages = 'languages'

    db_utils.getData(db, languages)
        .then(data => {
            res.json(data)
        })
})

/*************************************************/

/******** Rute za tips **********/
routes.post('/tips', (req, res) => {
    const data = req.body
    
    data.vreme = new Date()
    data.author = 'Radovan'
    
    //tip.insertTip(data)
    const tips = 'tips'
    db_utils.insertData(db, tips, data)
    res.send('Ok baby!')
})

routes.get('/tips', (req, res) => {
    const tips = 'tips'
    db_utils.getData(db, tips)
        .then(data => {
            res.json(data)
        })
})
/*************************************************/

/* Rute za todos */
routes.post('/todos', (req, res) => {
    const data = req.body

    data.vreme = new Date()
    data.author = 'Radovan'
    //ovde ide f-ja sa ./db/todos todo.insertTodo(data)
    //todo.insertTodo(data)
    const todos = 'todos'
    db_utils.insertData(db, todos, data)
    res.send('Ok')
})

routes.get('/todos', (req, res) => {
    const todos = 'todos'
    db_utils.getData(db, todos)
        .then(data => {
            res.json(data)
        })
})

/**************************************************/
module.exports = routes

