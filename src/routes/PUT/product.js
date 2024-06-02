const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.put("/:id", async (req, res) => {
  const query = `UPDATE products SET name = '${req.body.name}',
   description = '${req.body.description}',
    price = ${req.body.price},
        category_id = '${req.body.category_id}',
        cover_image = '${req.body.cover_image}',    
        image = '${req.body.image}'
    WHERE PRODUCT_ID = ${req.params.id}`;
  const result = await runQuery(query);
  res.json(result);
});

module.exports = router;
