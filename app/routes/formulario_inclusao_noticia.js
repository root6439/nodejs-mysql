const methods = require("../../methods")

module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    console.log(methods.getRoute + req.url);
    res.render('admin/form_add_noticia')
  }) 
}