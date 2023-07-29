const {signPayload} = require('../utilities/auth');
const {encrypt} = require('../utilities/cryptoService');

const loginUser = (req, res) => {
    //validation of username and password can be done in validation middleware before reaching this controller
    const {username, password} = req.body;
    if(!username || !password) return res.sendStatus(400);
    else{
        const validUser = process.env.USER;
        const validPassword = process.env.PASSWORD;
        if(username !== validUser || password !== validPassword) return res.sendStatus(401);
        else{
            const payload = {
                username,
                password
            };
            const token = (signPayload(encrypt(payload)));
            res.json({token});
        }
    }
}

module.exports = {
    loginUser
};