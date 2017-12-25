const mysql = require("mysql");
module.exports = function() {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "xuxia310928",
        database: "test"
    });
    connection.connect(function(err) {
        if (err) {
            throw err;
        }
    });
    return connection;
}