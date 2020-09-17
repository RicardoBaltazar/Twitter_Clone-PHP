let app = require('./config/server')

let rotaHome = require('./app/routes/home')
rotaHome(app)

let rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

let rotaInclusaoNoticias = require('./app/routes/form_inclusao_noticia')
rotaInclusaoNoticias(app)

app.listen(8000, function(){
    console.log('servidor rodando na porta 8000')
})


/*
 npm install express -save -> baixar o express para dentro do projeto
 npm install ejs -save
 npm install nodemon -D -> instalar localmente
 adicione o script -> "dev": "nodemon server.js"

*/