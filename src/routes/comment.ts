import express  from "express"; 
const router = express();

import { addComment, deleteComment } from "../controllers/comment";
import auth from "../auth/auth";

router.post('/comment/:postId&:commentId', auth, addComment);
router.delete('/comment/:id', deleteComment);


export default router;