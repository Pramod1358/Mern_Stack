const http = require('http')


const app = http.createServer((req , res) =>{
   
})

const PORT = 4000
app.listen(PORT , () =>{
    console.log(`server is up and running on port ${PORT}`)
})