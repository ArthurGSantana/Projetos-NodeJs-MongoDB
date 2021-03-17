module.exports = function (app) {
    app.get("/noticias", (req, res) => {
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.noticiasDAO(connection);
        noticiasModel.getNoticias((error, result)=>{
            res.render('noticias/noticias', {noticias: result})
        })
    })
}