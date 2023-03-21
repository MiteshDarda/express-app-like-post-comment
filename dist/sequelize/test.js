"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const test = async () => {
    try {
        await index_1.default.authenticate();
        console.log('✅ Connection has been established successfully.');
    }
    catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};
exports.default = test;
//# sourceMappingURL=test.js.map