import express  from "express"; 
const router = express();

import { addComment, deleteComment } from "../controllers/comment";
import auth from "../auth/auth";

router.post('/post/:postId/comment', auth, addComment);
router.post('/post/comment/:commentId', auth, addComment);
router.delete('/post/:postId/comment/:commentId', auth, deleteComment);


export default router;