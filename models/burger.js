let orm = require("../config/orm.js");
let burger = {
    all: function(cb){
        orm.all("sandwiches", function(res){
            cb(res);
        
    });
    },
    create: function(cols, vals, cb) {
        orm.create("sandwiches", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condtion, cb) {
        orm.update("sandwiches", objColVals, condition, function(res){
            cb(res);
        });
    }
};
 
module.exports = burger;