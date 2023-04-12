import express  from "express"; 
const router = express();

import { addComment, deleteComment } from "../controllers/comment";
import onPost from "../controllers/Comments/onPost";
import auth from "../auth/auth";

router.post('/:postId/comment', auth, onPost);
router.post('/comment/:commentId', auth, addComment);
router.delete('/comment/:commentId', auth, deleteComment);


export default router;