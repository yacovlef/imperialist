const bcrypt = require('bcrypt');

const { User } = require('../models');

const getList = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    const password = bCrypt.hashSync(req.body.password, 10);
    
    User.create({ ...req.body, password })
        .then(user => res.json(user))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    if (req.body.password) {
        const password = bcrypt.hashSync(req.body.password, 10);
        req.body = { ...req.body, password };
    }
   
    User.update(req.body, {
        where: { id: req.params.id }
    })
        .then(user => res.json(user))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};
