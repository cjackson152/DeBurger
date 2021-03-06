let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(data) {
        let hbsObject = {
            sandwiches: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req,res){
    burger.create([
        "burger_name", "eaten"
    ], [
        req.body.burger_name, req.body.eaten
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        eaten: req.body.eaten
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    let condition =- "id = " + req.params.id;
    burger.delete(condition, function() {
        res.redirect("/");
    });
});
module.exports = router;