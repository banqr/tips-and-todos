const express = require("express")
const routes = express.Router()
const data = require('./db/data')
const tip = require('./db/tip')
const todo = require('./db/todo')

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
    data.insertLanguage(jezici)
    res.send("Ok")
})

routes.get('/insert_languages', (req, res) => {
    data.returnLanguages()
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

    tip.insertTip(data)
    res.send('Ok baby!')
})

routes.get('/tips', (req, res) => {
    tip.getTips()
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
    todo.insertTodo(data)
    res.send('Ok')
})

routes.get('/todos', (req, res) => {
    todo.getTodos()
        .then(data => {
            res.json(data)
        })
})

/**************************************************/
module.exports = routes

