"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.createUser = exports.getUserList = void 0;
const user_1 = __importDefault(require("../db/models/user"));
const getUserList = async (req, res) => {
    console.error(req.body);
    const userList = await user_1.default.findAll();
    console.log(userList);
    return res.send({ users: userList }).status(200);
};
exports.getUserList = getUserList;
const createUser = async (req, res) => {
    console.error(req.body);
    const user = await user_1.default.create(req.body);
    if (user) {
        res.send({ user }).status(200);
    }
};
exports.createUser = createUser;
const getUserById = async (req, res) => {
    const user = await user_1.default.findByPk(req.params.id);
    if (user) {
        res.send({ user }).status(200);
    }
};
exports.getUserById = getUserById;
//# sourceMappingURL=user.controller.js.map