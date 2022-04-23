const jwt = require("jsonwebtoken");

// Create Token
const createToken = (id, data) => {
	return jwt.sign({ id, ...data }, process.env.JWT_TOKENKEY, {
		expiresIn: "6h",
	});
};

module.exports = createToken;
