const { Project } = require('../models');

const getList = (req, res) => {
    const find = {};

    if (req.query.status) {
        find.status = req.query.status
    }

    Project.findAll({
        where: find,
        project: ['id']
    })
        .then(project => res.json(project))
        .catch(error => res.status(500).json(error));
};

const create = (req, res) => {
    Project.create(req.body)
        .then(project => res.json(project))
        .catch(error => res.status(500).json(error));
};

const update = (req, res) => {
    Project.update(req.body, { where: { id: req.params.id } })
        .then(project => res.json(project))
        .catch(error => res.status(500).json(error));
};

const remove = (req, res) => {
    Project.destroy({ where: { id: req.params.id } })
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json(error));
};

module.exports = {
    getList,
    create,
    update,
    remove
};
