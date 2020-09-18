
module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        let mysql = require('mysql')

        //estabelecer a conexão com o banco de dados
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            passowrd: '26260',
            database: 'portal_noticias' //nome do banco de dados criado no mysql server
        })

        //realizando as consultas
        connection.query('select * from noticias', function(error, result) {
            res.send(result)
            console.log(result)
        })

        //res.render('noticias/noticias')
    })
}

/*
const mysql = require('mysql');
const { promisify } = require('util');

const listar = async () => {
  const conexao = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '26260',
    database : 'portal_noticias'
  });

  const query = promisify(conexao.query);

  return query('select * from noticias');
};

module.exports = (app) => {
  app.get('/noticias', async (req, res) => {
    try {
      res.send(await listar());
    } catch(e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  });
};


*/