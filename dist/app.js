"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./routes/users.routes");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` });
});
app.use(routes_1.routes);
app.use(users_routes_1.route);
app.use(express_1.default.urlencoded({ extended: true }));
try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
catch (error) {
    console.log(`Error occurred: ${error.message}`);
}
//# sourceMappingURL=app.js.map