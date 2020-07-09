let mysql = require("mysql");
let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "mixVok-quxsy0-sinmup",
    database: "burgers"
});

connection.connect(function(err) {
    if (err) {
        console.log("error:" + err.stack);
        return;
    }
    console.log("connected:" + connection.threadId);
});
module.exports = connection;