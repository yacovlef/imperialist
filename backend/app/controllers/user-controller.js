const bcrypt = require('bcrypt');

const { User } = require('../models');

const getList = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, password) => {
        User.create({ ...req.body, password })
            .then(user => res.json(user))
            .catch(error => res.status(500).json(error));
    });
};

module.exports = {
    getList,
    create
};
