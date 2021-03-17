module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia");
  });

  app.post("/noticias/salvar", (req, res) => {
    let noticia = req.body;
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection)
    noticiasModel.salvarNoticia(noticia, (error, result) => {
      res.redirect('/noticias');
    });
  });
};
