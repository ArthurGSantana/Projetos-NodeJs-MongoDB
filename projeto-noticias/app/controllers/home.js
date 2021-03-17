module.exports.index= function(app, req, res) {
    let connection = app.config.dbConnection();
    let noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.get5UltimasNoticias((error, result)=> {
        res.render("home/index", {noticias: result});
    })
    
}