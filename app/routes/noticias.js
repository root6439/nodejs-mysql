const methods = require("../../methods")

module.exports = function (app) {

  app.get("/noticias", function (req, res) {

    const mysql = require("mysql")

    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '123456789',
      database: 'portal_noticias'
    })

    connection.query("select * from noticia", function (err, resp) {
      if (err) throw err;
      res.send(resp)
    })

    console.log(methods.getRoute + req.url);
  })
}