const { Project, Product, Material, Nomenclature, Performer, User, Wages } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.ProjectId) {
        find.ProjectId = req.query.ProjectId
    }

    if (req.query.status) {
        find.status = req.query.status
    }

    Product.findAll({
        where: find,
        project: ['id'],
        include: [{
            model: Material,
            include: [{
                model: Nomenclature,
                paranoid: false
            }]
        },
        {
            model: Performer,
            include: [{
                model: User,
                paranoid: false
            },
            { model: Wages }]
        }]
    })
        .then(productList => res.json(productList))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Product.create(req.body, {
        include: [ Project ]
    })
        .then(product => res.json(product))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Product.update(req.body, { where: { id: req.params.id } })
        .then(project => res.json(project))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Product.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};
