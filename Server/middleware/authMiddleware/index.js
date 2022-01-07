const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookie.authLogin;
    // Check json web token exists & is Verified
    if (token) {
        jwt.verify(token, process.env.JWT_TOKENKEY, (err, decodedToken) => {
            if (err) {
                res.status(400).json({ message: err.message, code: err.code });
                next();
            } else {
                console.log(decodedToken);
                next();
            }
        });
    }
};

// const checkUser = (req, res, next) => {
//   const token = req.cookie.authLogin;
//   if (token) {
//     jwt.verify(token, process.env.JWT_TOKENKEY, async (err, decodedToken) => {
//       if (err) {
//         res.status(400).json({ message: err.message, code: err.code });
//         res.locals.user = null;
//         next();
//       } else {
//         console.log(decodedToken);
//         const user = await User.findById(decodedToken);
//         res.locals.user = user;
//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };

module.exports = { requireAuth };
