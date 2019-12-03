const { Material, Product } = require('../models');

const create = (req, res) => {
    Material.create(req.body, {
        include: [ Product ]
    })
        .then(material => res.json(material))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Material.update(req.body, { where: { id: req.params.id } })
        .then(material => res.json(material))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Material.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    create,
    update,
    remove
};
