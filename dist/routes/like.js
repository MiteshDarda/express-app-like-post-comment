"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const like_1 = require("../controllers/like");
router.post('/addLikeDislike', like_1.addLikeDislike);
router.post('/updateLikeDislike', like_1.updateLikeDislike);
exports.default = router;
//# sourceMappingURL=like.js.map