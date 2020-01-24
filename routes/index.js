var express = require('express');
var router = express.Router();
var dbconn = require('../helpers/dbconn.js')

/* GET home page. */
router.get('/items', function(req, res) {
  var conn = dbconn.conn
  conn.connect(function(err) {
    if (err) throw err;
    res.json({message:'connected'})
  });
});

router.post('/item', function (req, res) {

})

router.put('/item', function (req, res) {

})

router.delete('/item', function (req, res) {

})

module.exports = router;
