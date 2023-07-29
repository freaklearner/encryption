const jwt = require('jsonwebtoken');

const signPayload = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = {
    signPayload
};