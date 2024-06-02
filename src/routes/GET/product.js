const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.get("/:id", async (req, res) => {
  const query = `SELECT * FROM PRODUCTS WHERE PRODUCT_ID = ${req.params.id}`;
  const result = await runQuery(query);
  res.json(result);
});

module.exports = router;
