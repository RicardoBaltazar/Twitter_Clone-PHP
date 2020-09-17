let app = require('./config/server')

let rotaHome = require('./app/routes/home')
rotaHome(app)

let rotaNoticias = require('./app/routes/noticias')(app)

let rotaInclusaoNoticias = require('./app/routes/form_inclusao_noticia')(app) //declarando e já chamando a função

app.listen(8000, function(){
    console.log('servidor rodando na porta 8000')
})


/*
 npm install express -save -> baixar o express para dentro do projeto
 npm install ejs -save
 npm install nodemon -D -> instalar localmente
 adicione o script -> "dev": "nodemon server.js"


MTSQL
create databases portal_noticias;
DROP database portal_noticias;

use portal_noticias

create table noticias(
id_noticias in not null primary key auto_increment,
titulo varchar(100),
noticias text,
data_criacao timestamp default current_timestamp);

insert into noticias(titulo, noticia)values('titulo da noticia', 

''conteudo da noticia);

select * from noticias;
*/