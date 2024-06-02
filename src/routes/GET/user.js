const express = require("express");
const runQuery = require("../../config/runQuery");
const router = express.Router();

router.get("/:email", function (req, res, next) {
  const { email } = req.body;
  runQuery(`SELECT * FROM USERS WHERE email = '${req.params.email}'`).then(
    (result) => {
      res.json(result);
    }
  );
});

module.exports = router;
