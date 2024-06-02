const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.post("/", function (req, res, next) {
  const { sender_id, product_id, message } = req.body;

  const query = `
    INSERT INTO Messages ( sender_id, product_id, message)
    VALUES ( '${sender_id}', '${product_id}', '${message}')
  `;

  runQuery(query)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
