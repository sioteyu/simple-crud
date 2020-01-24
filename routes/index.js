var express = require('express');
var router = express.Router();
var dbconn = require('../helpers/dbconn.js')

/* GET home page. */
router.get('/items', function(req, res) {
  var conn = dbconn.conn
  var sql = "SELECT * FROM items";
  conn.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result)
  })
});

router.post('/item', function (req, res) {
  var conn = dbconn.conn
  var sql = `INSERT INTO items (NAME, qty, amount) VALUES ('${req.body.name}', ${req.body.qty}, ${req.body.amount})`;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.json({message:'success'});
  })
});

router.put('/item', function (req, res) {
  var conn = dbconn.conn
  var sql = "UPDATE items SET "
  if (req.body.name) {
    sql += `NAME = '${req.body.name}', `;
  }
  if (req.body.qty) {
    sql += `qty = ${req.body.qty}, `;
  }
  if (req.body.amount) {
    sql += `amount = ${req.body.amount} `
  }
  sql += `WHERE ID = ${req.body.id}`;

  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.json({message:'success'});
  })
});

router.delete('/item', function (req, res) {
  var conn = dbconn.conn
  var sql = `DELETE FROM items WHERE ID = ${req.body.id}`
  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.json({message:'success'});
  })
});

module.exports = router;
