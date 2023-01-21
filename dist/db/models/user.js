"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class UserModel extends sequelize_1.Model {
}
exports.default = UserModel;
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { tableName: "users", timestamps: false, sequelize: db_1.sequelize });
//# sourceMappingURL=user.js.map