const { Project, Product, Material, Nomenclature, Performer, User, Wages } = require('../models');

const { projectStatusUpdate } = require('../../utils/lib');

const getList = (req, res) => {
    const find = {};

    if (req.query.id) {
        find.id = req.query.id;
    }

    if (req.query.ProjectId) {
        find.ProjectId = req.query.ProjectId;
    }

    if (req.query.status) {
        find.status = req.query.status;
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
    let {body, file} = req;

    const data = Object.assign({}, body);
    
    if (file) {
        data.image = file.filename;
    }

    Product.create(data, {
        include: [ Project ]
    })
        .then(product => {
            projectStatusUpdate();

            res.json(product)
        })
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    let {body, file} = req;

    const data = Object.assign({}, body);

    if (file) {
        data.image = file.filename;
    }

    Product.update(data, { where: { id: req.params.id } })
        .then(project => {
            projectStatusUpdate();

            res.json(project)
        })
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
