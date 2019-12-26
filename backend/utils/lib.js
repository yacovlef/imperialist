const { Project, Product } = require('../app/models');

const projectStatusUpdate = async () => {
    const projectList = await Project.findAll({
        include: [Product]
    });

    projectList.forEach(project => {

        const projectInWork = project.Products.some(product => ['devDoc', 'manufacturing', 'painting'].includes(product.status));

        if (projectInWork) {
            Project.update({status: 'inWork'}, { where: { id: project.id } }); return;
        }

        const projectReady = project.Products.every(product => ['ready'].includes(product.status));

        if (projectReady) {
            Project.update({status: 'ready'}, { where: { id: project.id } }); return;
        }

        const projectLoaded = project.Products.every(product => ['loaded'].includes(product.status));

        if (projectLoaded) {
            Project.update({status: 'loaded'}, { where: { id: project.id } }); return;
        }

        const projectRefused = project.Products.every(product => ['refused'].includes(product.status));

        if (projectRefused) {
            Project.update({status: 'refused'}, { where: { id: project.id } }); return;
        }
    });
};

module.exports = {
    projectStatusUpdate
};
