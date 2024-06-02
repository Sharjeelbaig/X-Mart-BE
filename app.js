let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let router = require("./src/router");
const runQuery = require("./src/config/runQuery");
const { connection } = require("./src/config/connectSF");
let app = express();
var cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
router(app);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    process.stdout.write("\x1Bc");
    console.log("Connected to snowflake ❄");
    console.log("Server is running on port 3000 🚀");
  }
});
module.exports = app;
