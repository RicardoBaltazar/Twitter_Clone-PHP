let http = require('http')

let server = http.createServer(function(req, res){
    let categoria = req.url

    if(categoria == '/tecnologia'){
        res.end('<html><body>tecnologia</body></html>')
    } else if (categoria == '/moda') {
        res.end('<html><body>moda</body></html>')
    } else {
        res.end('<html><body>Ola mundo</body></html>')
    }
})

server.listen(8000)