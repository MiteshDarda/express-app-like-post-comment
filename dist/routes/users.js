"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const users_1 = require("../controllers/users");
router.post('/addUser', users_1.addUsers);
router.delete('/deleteUser', users_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=users.js.map