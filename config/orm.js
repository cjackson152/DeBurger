let connection = require("../config/connection.js");

function print(num) {
    var arr = [];
    for (var i=0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function toSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    
    return arr.toString();
    
};

let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += print(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += toSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        })

    }
};
module.exports = orm