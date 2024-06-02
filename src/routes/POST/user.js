const express = require("express");
const runQuery = require("../../config/runQuery");
const router = express.Router();

router.post("/", function (req, res, next) {
  const { email, name, password, profile_image, date_of_birth } = req.body;
  runQuery(
    `INSERT INTO USERS (user_id,email,name, password, profile_image, date_of_birth)
     VALUES ('${Math.floor(Math.random() * 1000000000)}',
      '${email}', '${name}', '${password}', '${profile_image}', '${date_of_birth}')`
  ).then((result) => {
    res.json(result);
  });
});

module.exports = router;
