const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Ola Mundo!!')
})

app.listen(8000, function(){
    console.log('servidor rodando na porta 8000')
})


/*
 npm install express -save -> baixar o express para dentro do projeto

*/