const cryptoJS = require('crypto-js');

const encrypt = (data) => {
    return cryptoJS.AES.encrypt(JSON.stringify(data), process.env.CRYPTO_SECRET).toString();
}

const decrypt = (data) => {
    const bytes = cryptoJS.AES.decrypt(data, process.env.CRYPTO_SECRET);
    return JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
}

module.exports = {
    encrypt,
    decrypt
};