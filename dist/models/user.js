"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
class UserModel {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize('postgres::memory');
        this.User = this.sequelize.define('User', {
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            createdAt: sequelize_1.DataTypes.DATE,
            updatedAt: sequelize_1.DataTypes.DATE,
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.js.map