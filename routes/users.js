const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    throw new Error('TESTE ERRO SINCRONO')
});

module.exports = router;
