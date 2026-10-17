const express = require('express')

const app= express()

app.use(express.json());

const port = 8081;

const todoList = ["pramod" , "Prasanth"];

app.get('/todos' , (req , res) =>{
    res.status(200).send(todoList);
})
app.post('/todos' ,(req , res) =>{
    const newTodo = req.body.item;
    todoList.push(newTodo);

    res.status(201).send({
        message : "added the item"
    })
})

app.delete('/todos', (req , res) =>{
    const todo = req.body.item;
    todoList.find((element , index) =>{
        if(todo === element){
            todoList.splice(index ,1);
        }
    })
    
    res.status(204).send({
        message : "Deleted item"
    })
})

app.listen(port ,() =>{
     console.log(`Server is running at http://localhost:${port}`)
})