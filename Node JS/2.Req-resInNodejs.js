const http =  require('http')

const PORT = 4000

const app = http.createServer((req , res) =>{

    res.setHeader('content-type', 'text/html');
    // res.write('<h1>Hello World</h1>')

    res.write(
        `
            <html>
                <head>
                    <title>
                        Node JS
                    </title>
                </head>
                <body>
                    <h1>Hi my name is Pramod Korada </h1>
                </body>
            </html>
        `
    )

})

app.listen(PORT , () =>{
    console.log(`Server is up and running at http://localhost:${PORT}`)
})