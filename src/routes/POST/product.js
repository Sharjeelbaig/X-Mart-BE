const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.post("/", function (req, res, next) {
  const { user_id, category_id, name, description, price, cover_image, image } =
    req.body;
  runQuery(
    `INSERT INTO Products (product_id, user_id, category_id, name, description, price, cover_image, image)
        VALUES ('${Math.floor(
          Math.random() * 1000000000
        )}', '${user_id}', '${category_id}', '${name}', '${description}', '${price}', '${cover_image}', '${image}')`
  ).then((result) => {
    res.json(result);
  });
});

module.exports = router;
