const { User } = require('../models');

module.exports.renderRegistration = function (req, res) {
    res.render('users/register');
};