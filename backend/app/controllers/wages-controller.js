const {  Wages, Performer, Product, User, Project } = require('../models');

const { Op } = require('sequelize');

const getList = (req, res) => {
    const {
        PerformerId,
        startDate,
        endDate,
        UserId
    } = req.query;

    const find = {};
    const findUser = {};

    if (PerformerId) {
        find.PerformerId = PerformerId;
    }

    if (startDate) {
        find.createdAt = {...find.createdAt};
        find.createdAt[Op.gte] = startDate;
    }

    if (endDate) {
        find.createdAt = {...find.createdAt};
        find.createdAt[Op.lte] = endDate;
    }

    if (UserId) {
        findUser.UserId = UserId;
    }
    
    Wages.findAll({
        where: find,
        project: ['id'],
        include: [{
            model: Performer,
            where: findUser,
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
        include: [Performer]
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
