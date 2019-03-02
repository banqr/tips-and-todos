const db = require('./connection')

const todos = db.get('todos')

const insertTodo = (data) => {
    return todos.insert(data)
}

const getTodos = () => {
    return todos.find()
}

module.exports = {
    insertTodo,
    getTodos,
    db
}