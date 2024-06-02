const snowflake = require("snowflake-sdk");

const connection = snowflake.createConnection({
  account: process.env.ACCOUNT,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  application: process.env.APPLICATION,
  database: process.env.DATABASE,
  schema: process.env.SCHEMA,
  role: process.env.ROLE,
  accessUrl: process.env.ACCESS_URL,
});

module.exports = {
  connection,
};
