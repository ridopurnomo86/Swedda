const jwt = require('jsonwebtoken');

// Token Expired
const maxAge = 3 * 24 * 60 * 60;

// Create Token
const createToken = (id, data) => {
    return jwt.sign({ id, ...data }, process.env.JWT_TOKENKEY, {
        expiresIn: maxAge,
    });
};

module.exports = createToken;