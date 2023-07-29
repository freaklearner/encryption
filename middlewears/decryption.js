const {decrypt} = require('../utilities/cryptoService');

module.exports = (req, res, next) => {
    const cipher = req.cipher;
    const payload = decrypt(cipher);
    req.payload = payload;
    next();
}