const {  Wages, Performer, Product, User, Project } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.PerformerId) {
        find.PerformerId = req.query.PerformerId
    }

    Wages.findAll({
        where: find,
        project: ['id'],
        include: [{
            model: Performer,
            include: [{
                model: Product,
                include: [Project]
            }, User]
        }]
    })
        .then(WagesList => res.json(WagesList))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Wages.create(req.body, {
        include: [ Project ]
    })
        .then(Wages => res.json(Wages))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Wages.update(req.body, { where: { id: req.params.id } })
        .then(project => res.json(project))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Wages.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};
