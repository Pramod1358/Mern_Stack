const express= require('express');
// const {users} = require("./data/users.json")

const usersRouter = require("./routes/users")
const booksRouter =require("./routes/books")

const dotenv = require("dotenv")
const app = express();

dotenv.config();
const DbConnection = require('./databaseConnection')

DbConnection();

const {UserModel , BookModel } = require('./models/index')

app.use(express.json());

const port = 8081;

app.get('/', (req, res) =>{
    res.status(200).json({
        message : "Home page :-"
    })
})

app.use("/users",usersRouter)
app.use("/books", booksRouter)

app.get('/users',(req , res)=>{
    res.status(200).json({
        success : true,
        data : users
    })
})


app.listen(port ,()=>{

    console.log(`server is running on http://localhost:${port}`)
})

// app.all('*',(req , res) =>{
//     res.status(500).json({
//         message: "Not build yet"
//     })
// })