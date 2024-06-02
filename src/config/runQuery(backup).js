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

module.exports = (query) =>
  new Promise((resolve, reject) =>
    connection.connect(function (err, conn) {
      if (err) {
        reject(err.message);
      } else {
        console.log("Successfully connected to Snowflake.");
        conn.execute({
          sqlText: query,
          complete: function (err, stmt, rows) {
            if (err) {
              reject(err.message);
            } else {
              console.log("Successfully executed statement: " + stmt.getSqlText());
              resolve(rows);
            }
          },
        });
      }
    })
  );
