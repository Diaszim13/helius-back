"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const product_controller_1 = require("./controllers/product.controller");
const user_controller_1 = require("./controllers/user.controller");
const user_controller_2 = require("../src/controllers/user.controller");
const express_1 = require("express");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (request, response) => {
    response.json({
        _id: 'ABC123',
        name: 'Product Name',
        price: 28.90
    });
});
routes.get('/getUser', (request, response) => {
    (0, user_controller_2.getUserList)(request, response);
});
routes.post('/create', (req, res) => {
    (0, user_controller_1.createUser)(req, res);
});
routes.get('/getById:/{id}', (req, res) => {
    (0, user_controller_1.getUserById)(req.params.id, res);
});
routes.get('/getMachines', (req, res) => {
    (0, product_controller_1.getMachineList)(req, res);
});
routes.get('/getinativemachines', (req, res) => {
    (0, product_controller_1.getInativeMachineList)(req, res);
});
//# sourceMappingURL=routes.js.map