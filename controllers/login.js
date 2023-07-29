const {signPayload} = require('../utilities/auth');

const loginUser = (req, res) => {
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
            const token = signPayload(payload);
            res.json({token});
        }
    }
}

module.exports = {
    loginUser
};