const methods = require("../../methods")

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log(methods.getRoute + req.url);
    res.render("home/index")
  })
}