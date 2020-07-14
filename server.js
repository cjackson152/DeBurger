let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let port = 3001;
let app = express();
<<<<<<< HEAD
app.use(express.static(process.cwd() + "/public/"));
=======
app.use(express.static(process.cwd() + "/publc"));
>>>>>>> d039026ea3ba0c5947a4ed9b7c638b120e10b955
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
let routes = require("./controllers/controller.js");

app.use("/", routes);
app.listen(port);

    