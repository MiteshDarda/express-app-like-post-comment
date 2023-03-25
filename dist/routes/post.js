"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const post_1 = require("../controllers/post");
router.post('/addPost', post_1.addPost);
router.post('/deletePost', post_1.deletePost);
exports.default = router;
//# sourceMappingURL=post.js.map