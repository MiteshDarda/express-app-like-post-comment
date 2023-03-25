"use strict";
// OLD FILES // DEPRECATED WAY OF DOING // NEW WAY WITH MIGRATIONS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import sequelize from './index';
const index_1 = __importDefault(require("../../sequelize/models/index"));
const associate_1 = __importDefault(require("./associate"));
const test = async () => {
    try {
        // await sequelize.authenticate();
        await (0, associate_1.default)(index_1.default.User, index_1.default.Likes, index_1.default.Post, index_1.default.Comment);
        await index_1.default.sequelize.sync();
        // await drop(db.User, db.Likes, db.Post, db.Comment);
        console.log('✅ Connection has been established successfully.');
    }
    catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        return false;
    }
    return true;
};
exports.default = test;
//# sourceMappingURL=test.js.map