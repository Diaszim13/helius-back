"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: "postgres",
    password: "132465",
    database: "helius-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432
});
//# sourceMappingURL=db.js.map