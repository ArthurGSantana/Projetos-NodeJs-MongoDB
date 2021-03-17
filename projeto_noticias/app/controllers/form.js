module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}


module.exports.noticias_salvar = function (app, req, res) {
    let noticia = req.body;

    req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatorio').notEmpty();
    req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'})
    req.assert('noticia', 'Noticia é obrigatorio').notEmpty();

    let erros = req.validationErrors();

    if(erros){
      res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
      return;
    }


    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection)
    noticiasModel.salvarNoticia(noticia, (error, result) => {
      res.redirect('/noticias');
    });
}


