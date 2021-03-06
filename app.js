const app = require("./config/server-config")

const noticias = require("./app/routes/noticias")
const home = require("./app/routes/home")
const formulario = require("./app/routes/formulario_inclusao_noticia")

home(app)
formulario(app)
noticias(app)

app.listen(3000, function () {
  console.log("Server up with Express");
})