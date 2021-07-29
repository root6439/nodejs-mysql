const methods = require("../../methods")

module.exports = function (app) {
  app.get("/noticias", function (req, res) {
    console.log(methods.getRoute + req.url);
    res.render('noticias/noticias')
  })
}