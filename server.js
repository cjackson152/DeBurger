let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let port = 3001;
let app = express();
app.use(express.static(process.cwd() + "/publc"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view enginge", "handlebars");
let routes = require("./controllers/controller.js");

app.use("/", routes);
app.listen(port);

    