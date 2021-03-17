module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", (req, res) => {
    app.app.controllers.form.formulario_inclusao_noticia(app, req, res);
  });

  app.post("/noticias/salvar", (req, res) => {
    app.app.controllers.form.noticias_salvar(app, req, res);
  });
}
