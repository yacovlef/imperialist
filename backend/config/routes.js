const {
    userController,
    authController,
    orderController,
    nomenclatureController,
    productController,
    materialController
} = require('../app/controllers');

const { authMiddleware } = require('../app/middlewares');

module.exports = (app) => {
    // userList
    app.get('/api/users', authMiddleware, userController.getList);
    app.post('/api/users', authMiddleware, userController.create);
    app.put('/api/users/:id', authMiddleware, userController.update);
    app.delete('/api/users/:id', authMiddleware, userController.remove);

    //auth
    app.post('/api/login', authController.login);

    // orderList
    app.get('/api/orders', authMiddleware, orderController.getList);
    app.post('/api/orders', authMiddleware, orderController.create);
    app.put('/api/orders/:id', authMiddleware, orderController.update);
    app.delete('/api/orders/:id', authMiddleware, orderController.remove);

    // nomenclatureList
    app.get('/api/nomenclature', authMiddleware, nomenclatureController.getList);
    app.post('/api/nomenclature', authMiddleware, nomenclatureController.create);
    app.put('/api/nomenclature/:id', authMiddleware, nomenclatureController.update);
    app.delete('/api/nomenclature/:id', authMiddleware, nomenclatureController.remove);

    // productList
    app.get('/api/products', authMiddleware, productController.getList);
    app.post('/api/products', authMiddleware, productController.create);
    app.put('/api/products/:id', authMiddleware, productController.update);
    app.delete('/api/products/:id', authMiddleware, productController.remove);

    // materialList
    app.post('/api/materials', authMiddleware, materialController.create);
    app.put('/api/materials/:id', authMiddleware, materialController.update);
    app.delete('/api/materials/:id', authMiddleware, materialController.remove);
}
