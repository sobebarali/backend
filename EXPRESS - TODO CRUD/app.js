const express = require('express')
const Todo = require("./todo")

const app = express()
app.use(express.json())

const todo = new Todo('todos.json')

/** Get all Todos */
app.get('/todos', (req, res) => {

    const todos = todo.getAll()

    res.send({
        data: todos
    })
})

/** Get Todo by id */ 
app.get('/todo/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    const info = todo.getById(id)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Todo does not exist."
        })
    }

})

/** Create an Todo */
app.post('/todo', (req, res) => {

    const info = req.body

    todo.addTodo(info)

    res.send({
        message: "Todo has been added"
    })
})

/** Update an Todo */
app.patch('/todo/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const info = req.body

    todo.updateTodo(info,id)
    
    return res.status(200).send({
        message: 'Todo updated successfully'
    })
})

/** Delete an Todo */
app.delete('/todo/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    try {
        todo.deleteTodo(id)

        return res.send({
            message: "Todo has been deleted"
        })

    } catch(ex) {

        res.status(500).send({
            message: ex.message
        })
    }

})

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000')
})