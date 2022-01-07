const User = require('../../models/userSchema');
// const csurf = require('csurf');
const filterData = require('../../modules/filterData');
const createToken = require('../../modules/createToken');
const handleErrors = require('../../modules/handleError');



module.exports.signup_post = async (req, res) => {
    const data = req.body;
    try {
        const user = await User.create(data);
        res.status(200).json({ user: user._id, message: 'Success Create User' });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
};

// export const csrfProtection = csurf({ cookie: { httpOnly: true, maxAge: maxAge }});

module.exports.signin_post = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.login(email, password);

        const filteredKeys = ['username', 'email'];
        const userInfo = filterData(filteredKeys, user);

        const token = createToken(user._id, userInfo);

        res.cookie('swedda-login', token, {
            maxAge: 2 * 60 * 60 * 1000, // two Hours
        });

        res.status(200).json({ user: user._id });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(401).json({ error: 'Cannot Login', errorMessage: errors });
    }
    next();
};

module.exports.logout_get = async (req, res, next) => {
    try {
        if (res.cookie) {
            res.cookie('swedda-login', '',{ maxAge: 0 });
            res.status(200).json();
        }
    } catch(error) {
        res.status(500).json({ error: 'Error'});
    }
    next();
};
