const express = require("express")
const Joi = require('joi')
const routes = express.Router()
const db = require('./db/connection')
const schema_tips = require('./db/joi_schema')
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
    //const result = Joi.validate(data, schema_tips.schema_tips)
    
    if (Joi.validate(data, schema_tips.schema_tips).error === null){    
        data.vreme = new Date()
        data.author = 'Radovan'
        
        //tip.insertTip(data)
        const tips = 'tips'
        db_utils.insertData(db, tips, data)
        res.send('Ok baby!')
    }
    else {
        return Promise.reject(result.error)
    }
})

routes.get('/tips', (req, res) => {
    const tips = 'tips'
    db_utils.getData(db, tips)
        .then(data => {
            res.json(data)
        })
})

routes.delete('/tips/:id', (req, res) => {
    const id = req.params.id
    const tips = 'tips'

    db_utils.deleteData(db, tips, id)

    res.send('Ok madafaka!')
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

routes.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    const todos = 'todos'

    db_utils.deleteData(db, todos, id)

    res.send('Obrisao todo')
})

/**************************************************/
module.exports = routes

