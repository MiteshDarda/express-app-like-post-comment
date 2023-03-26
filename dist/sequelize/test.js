"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.Comment = exports.Post = exports.Likes = exports.User = exports.test = void 0;
// import sequelize from './index';
const index_1 = __importDefault(require("../../sequelize/models/index"));
const associate_1 = __importDefault(require("./associate"));
const User = index_1.default.User;
exports.User = User;
const Likes = index_1.default.Likes;
exports.Likes = Likes;
const Post = index_1.default.Post;
exports.Post = Post;
const Comment = index_1.default.Comment;
exports.Comment = Comment;
const sequelize = index_1.default.sequelize;
exports.sequelize = sequelize;
const test = async () => {
    try {
        // await sequelize.authenticate();
        await (0, associate_1.default)(User, Likes, Post, Comment);
        await index_1.default.sequelize.sync();
        // await drop(User, Likes, Post, Comment);
        console.log('✅ Connection has been established successfully.');
    }
    catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        return false;
    }
    return true;
};
exports.test = test;
//# sourceMappingURL=test.js.map