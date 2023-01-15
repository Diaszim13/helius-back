"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserList = void 0;
const user_1 = __importDefault(require("../db/models/user"));
const getUserList = async (req, res) => {
    const userList = await user_1.default.findAll();
    console.log(userList);
    return res.send({ message: 'FOI' });
};
exports.getUserList = getUserList;
//# sourceMappingURL=user.controller.js.map