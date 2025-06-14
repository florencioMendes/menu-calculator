var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({ title: 'Express' });
});

module.exports = router;
