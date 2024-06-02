const snowflake = require("snowflake-sdk");
const { connection } = require("./connectSF");

module.exports = (query) =>
  new Promise((resolve, reject) =>
    connection.execute({
      sqlText: query,
      complete: function (err, stmt, rows) {
        if (err) {
          reject(err.message);
        } else {
          console.log("Successfully executed statement: " + stmt.getSqlText());
          resolve(rows);
        }
      },
    })
  );
