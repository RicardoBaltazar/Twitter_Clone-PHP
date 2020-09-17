const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('home/index')
})

app.get('/form_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia')
})

app.get('/noticias', function(req, res){
    res.render('noticias/noticias')
})

app.listen(8000, function(){
    console.log('servidor rodando na porta 8000')
})


/*
 npm install express -save -> baixar o express para dentro do projeto
 npm install ejs -save

*/