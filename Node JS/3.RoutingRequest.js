const http = require('http')
const fs = require('fs');

const PORT = 4000

const app = http.createServer((req , res)  =>{
    res.setHeader('content-type', 'text/html');
    if (req.url === '/form'){

        res.write('<h1> User Login Page</h1>')
        res.write(
            `
                <form action ='/submitted-data' method = "POST">
                    <label>UserName:</label>
                    <input type='text' id='name' name='name' placholder='Pls enter your username' />
                    <br/><br/>
                    <label>Gender:</label>
                    <input type='radio' id='male' name='gender' value='male' />
                    <label for='male'>Male</label>
                    <input type='radio' id='female' name='gender' value='female' />
                    <label for='female'>Female</label>
                    <br/><br/>
                    <button type='submit'>Submit</button>
                </form>
            `
        )
        return res.end()
    }else if(req.url === '/redirected'){
        res.write('<h1>Redirected</h1>');
        return res.end();
    }else if(req.method === 'POST' && req.url.toLowerCase() === '/submitted-data'){
        res.statusCode = 302;
        fs.writeFileSync('user-data.txt' , 'Rohan-Kinnal');
        res.setHeader('Location' , '/redirected')
        return res.end()
    }
    res.write('<h1>No user Input</h1>')
})

app.listen(PORT , () =>{
    console.log(`Server is up and running at http://localhost:${PORT}`)
})