"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineModel = void 0;
const sequelize_1 = require("sequelize");
class MachineModel {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize('postgres::memory');
        this.Machine = this.sequelize.define('machine', {
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
            operador_id: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id'
                },
            }
        });
    }
}
exports.MachineModel = MachineModel;
//# sourceMappingURL=machine.js.map