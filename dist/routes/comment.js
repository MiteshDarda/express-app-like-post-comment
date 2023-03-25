"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const comment_1 = require("../controllers/comment");
router.post('/addComment', comment_1.addComment);
router.post('/deleteComment', comment_1.deleteComment);
exports.default = router;
//# sourceMappingURL=comment.js.map