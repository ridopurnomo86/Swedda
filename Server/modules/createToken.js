const jwt = require("jsonwebtoken");

// Create Token
const createToken = (id, expiresIn = "6h", data) => {
	return jwt.sign({ id, ...data }, process.env.JWT_TOKENKEY, {
		expiresIn: expiresIn,
	});
};

module.exports = createToken;
