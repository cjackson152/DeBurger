let mysql = require("mysql");
let connection;
if( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mixVok-quxsy0-sinmup",
        database: "burgers"
    })
}


connection.connect(function(err) {
    if (err) {
        console.log("error:" + err.stack);
        return;
    }
    console.log("connected:" + connection.threadId);
});
module.exports = connection;