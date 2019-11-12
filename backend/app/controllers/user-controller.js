const { User } = require('../models');

const getList = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList
};
