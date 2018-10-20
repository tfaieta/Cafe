var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "TONY"},
    {id: 2, username: "DANI"},
    {id: 3, username: "ADRIAN"},
  ]);
});

module.exports = router;
