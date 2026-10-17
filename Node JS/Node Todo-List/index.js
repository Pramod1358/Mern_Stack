const http = require('http')
const PORT = 8081

const toDoList = ["pramod" , "korada"];



http.createServer((req , res) =>{
    

    const{method , url } = req

    // console.log(method)
    // console.log(url)
    if(url.toLowerCase() === '/todos'){
        if(method === 'GET'){
            res.writeHead(200 , {"content-Type" :"text/html" })
            res.write(toDoList.toString())
        }else if(method === 'POST'){
            let body = '';
            req.on('error' , (err) =>{
                console.log(err);
            }).on('data', (chunk)=>{
                body+=chunk;
                // console.log("chunk :", chunk);
            }).on('end',() =>{
                body= JSON.parse(body);
                // console.log("body : ",body);
                let newTodo = toDoList;
                newTodo.push(body.item);
            })
        } else if(method === 'DELETE') {
                let body = '';

                req.on('error', (err) => {
                    console.log(err);
                })
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    body = JSON.parse(body);
                    const index = toDoList.indexOf(body.item);
                    if (index !== -1) {
                        toDoList.splice(index, 1);
                    }
                });
            }
                    else{
                        res.writeHead(501);
        }
    }
    else {
        res.writeHead(404)
    }
    res.end()
}).listen(PORT , ()=>{
    console.log(`The todo list Server is running at http://localhost:${PORT}`);
})