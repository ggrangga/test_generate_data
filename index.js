const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function() {
  require("./routes")(app);
});
server.setTimeout(300000);
