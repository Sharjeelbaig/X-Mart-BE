const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.post("", function (req, res, next) {
  // chat_id	buyer_id	seller_id	product_id	created_at
  const { buyer_id, seller_id, product_id } = req.body;
  runQuery(
    `INSERT INTO Chats (chat_id, buyer_id, seller_id, product_id)
            VALUES ('${Math.floor(
              Math.random() * 1000000000
            )}', '${buyer_id}', '${seller_id}', '${product_id}')`
  ).then((result) => {
    res.json(result);
  });
});
