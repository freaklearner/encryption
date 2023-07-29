const express = require('express');
const router = express.Router();

const LoginRoutes = require('./login');
const EncryptionRoutes = require('./encryption');
const AuthorizationMiddleware = require('../middlewears/authorization');


router.use('/login', LoginRoutes);
router.use('/encryption',AuthorizationMiddleware, EncryptionRoutes);

module.exports = router;