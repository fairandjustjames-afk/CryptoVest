// Authentication middleware

const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    if (token) {
        jwt.verify(token, config.get('jwtSecret'), (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;