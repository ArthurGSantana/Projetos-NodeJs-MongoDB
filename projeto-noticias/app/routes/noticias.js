let dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
    let connection = dbConnection();
    app.get("/noticias", (req, res) => {
        connection.query('select * from noticias;', (erro, result)=>{
            res.render('noticias/noticias', {noticias: result});
        });
    })
}