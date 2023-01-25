"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
const user_1 = __importDefault(require("../models/user"));
class MachineModel extends sequelize_1.Model {
}
exports.default = MachineModel;
MachineModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
}, { tableName: "machine", timestamps: false, sequelize: db_1.sequelize });
MachineModel.belongsTo(user_1.default, {
    constraints: true,
    foreignKey: 'operador_id'
});
//# sourceMappingURL=machine.js.map