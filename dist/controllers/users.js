"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.addUsers = void 0;
const user_1 = __importDefault(require("../../sequelize/models/user"));
const addUsers = async (req, res) => {
    res.send("ADDING");
    console.log(user_1.default);
    user_1.default.addUser({
        firstName: "Hey",
        lastName: "Hey"
    });
};
exports.addUsers = addUsers;
const deleteUsers = async (req, res) => {
    res.send("Deliting");
};
exports.deleteUsers = deleteUsers;
module.exports = { addUsers, deleteUsers };
//# sourceMappingURL=users.js.map