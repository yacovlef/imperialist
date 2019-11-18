const { Order } = require('../models');

const getList = (req, res) => {
    Order.findAll({ order: ['id'] })
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Order.create(req.body)
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Order.update(req.body, { where: { id: req.params.id } })
        .then(order => res.json(order))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Order.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};
