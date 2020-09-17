const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.send('Ola mundo!')
})

app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia')
})

app.get('/moda', function(req, res){
    res.send('moda')
})

app.listen(8000, function(){
    console.log('servidor rodando na porta 8000')
})


/*
 npm install express -save -> baixar o express para dentro do projeto
 npm install ejs -save

*/