let mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2802',
        database: 'portal_noticia'
    });
}