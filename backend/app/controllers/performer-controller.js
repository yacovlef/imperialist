const { Performer, Product, User } = require('../models');

const create = (req, res) => {
    Performer.create(req.body, {
        include: [ Product, User ]
    })
        .then(performer => res.json(performer))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Performer.update(req.body, { where: { id: req.params.id } })
        .then(performer => res.json(performer))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Performer.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    create,
    update,
    remove
};
