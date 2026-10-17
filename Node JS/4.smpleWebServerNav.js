const http = require('http')

const app = http.createServer((req,res) =>{
    
    if(req.url === '/home'){
        res.write('<h1>You are at Home Page</h1>')
        return res.end()
    }else if(req.url === '/about'){
        res.write('<h1>You are at about Page</h1>')
        return res.end()
    }
    else if(req.url === '/contact'){
        res.write('<h1>You are at contact Page</h1>')
        return res.end()
    }
    else if(req.url === '/admin'){
        res.write('<h1>You are at Admin Page</h1>')
        return res.end()
    }
    else if(req.url === '/user'){
        res.write('<h1>You are at user Page</h1>')
        return res.end()
    }

    res.write(
        `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/user">User</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
        `
    )
    return res.end()
})

const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`Node server is up and listening on port - http://localhost:${PORT}`)
})