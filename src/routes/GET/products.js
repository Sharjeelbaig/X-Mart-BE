const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.get("/", async (req, res) => {
  const query = "SELECT * FROM PRODUCTS";
  const result = await runQuery(query);
  res.send(result);
});

module.exports = router;
