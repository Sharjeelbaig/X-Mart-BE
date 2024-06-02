const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.delete("/:product_id", async (req, res) => {
  const query = `DELETE FROM Products WHERE product_id = ${req.params.product_id}`;
  try {
    const result = await runQuery(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
