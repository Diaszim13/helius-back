"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const product_controller_1 = require("@src/controllers/product.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.route = route;
route.get('/getMachinePk/:id', (req, res) => {
    (0, product_controller_1.getMachineById)(req, res);
});
//# sourceMappingURL=users.routes.js.map