const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.sendStatus(401);
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
            req.payload = user;
            next();
        });
    }
}