let http = require('http')

let server = http.createServer(function(req, res){
    res.end('<html><body>Ola mundo"</body></html>')
})

server.listen(8000)