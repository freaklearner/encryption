const express = require('express');
const router = express.Router();

const Encryption = require('../controllers/encryption');

router.get('/payload', Encryption.decrypData);

module.exports = router;
