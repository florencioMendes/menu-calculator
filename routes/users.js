const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({ title: 'respond with a resource' });
});

module.exports = router;
