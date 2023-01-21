"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
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
    response.send({ message: 'FOI' });
});
routes.post('/create', (req, res) => {
    (0, user_controller_1.createUser)(req, res);
});
//# sourceMappingURL=routes.js.map