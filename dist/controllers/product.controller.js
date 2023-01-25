"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMachineById = exports.getInativeMachineList = exports.getMachineList = void 0;
const machine_1 = __importDefault(require("../db/models/machine"));
const getMachineList = async (req, res) => {
    const machineList = await machine_1.default.findAll({
        where: {
            status: 'RODANDO'
        }
    });
    return res.send({ machines: machineList }).status(200);
};
exports.getMachineList = getMachineList;
const getInativeMachineList = async (req, res) => {
    const machineList = await machine_1.default.findAll({
        where: {
            status: "INATIVO",
        },
    });
    return res.send({ machines: machineList }).status(200);
};
exports.getInativeMachineList = getInativeMachineList;
const getMachineById = async (req, res) => {
    const machine = await machine_1.default.findByPk(req.params.id);
    if (machine) {
        return res.send({ machine: machine }).status(200);
    }
};
exports.getMachineById = getMachineById;
//# sourceMappingURL=product.controller.js.map