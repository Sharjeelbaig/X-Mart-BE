const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.get("/:id", async (req, res) => {
  const query = `SELECT * FROM PRODUCTS WHERE user_id = ${req.params.id}`;
  const result = await runQuery(query);
  res.send(result);
});

module.exports = router;
