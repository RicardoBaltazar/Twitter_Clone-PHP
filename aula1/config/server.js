//diretório de configuração básica do servidor
const express = require('express')
const app = express()

    
app.set('view engine', 'ejs')

module.exports = app