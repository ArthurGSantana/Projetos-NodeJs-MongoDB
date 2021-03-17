let mysql = require('mysql');

let connMysql = function (){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2802',
        database: 'portal_noticia'
    });
}

module.exports = function () {
    return connMysql;
}