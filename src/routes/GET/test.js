const express = require("express");
const runQuery = require("../../config/runQuery");
const router = express.Router();

router.get("/", function (req, res, next) {
  runQuery(`SELECT * FROM USERS;`).then((result) => {
    res.json(result);
  });
});

module.exports = router;
