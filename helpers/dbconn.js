var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

module.exports = {
  conn:conn
}
