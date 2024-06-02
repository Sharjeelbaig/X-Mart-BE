const express = require("express");
const router = express.Router();
const runQuery = require("../../config/runQuery");

router.get("/:id", async (req, res) => {
  const query = `
  SELECT 
    M.MESSAGE_ID,
    M.MESSAGE,
    M.CREATED_AT,
    S.NAME AS SENDER_NAME,
    S.EMAIL AS SENDER_EMAIL,
    S.PROFILE_IMAGE AS SENDER_PROFILE_IMAGE,
    PO.NAME AS PRODUCT_OWNER_NAME,
    PO.PROFILE_IMAGE AS PRODUCT_OWNER_PROFILE_IMAGE,
    PO.EMAIL AS PRODUCT_OWNER_EMAIL,
    P.PRODUCT_ID AS Product_ID
FROM 
    MESSAGES M
JOIN 
    PRODUCTS P ON M.PRODUCT_ID = P.PRODUCT_ID
JOIN 
    USERS S ON M.SENDER_ID = S.USER_ID
JOIN 
    USERS PO ON P.USER_ID = PO.USER_ID
WHERE 
    M.SENDER_ID != ${req.params.id} AND
    P.USER_ID = ${req.params.id};
  `;
  try {
    const result = await runQuery(query, [req.params.id, req.params.id]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
