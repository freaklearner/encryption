const express = require('express');
const router = express.Router();

const LoginRoutes = require('./login');
const EncryptionRoutes = require('./encryption');
const AuthorizationMiddleware = require('../middlewears/authorization');
const DecryptionMiddleware = require('../middlewears/decryption');


router.use('/login', LoginRoutes);
router.use('/encryption',AuthorizationMiddleware, DecryptionMiddleware, EncryptionRoutes);

module.exports = router;