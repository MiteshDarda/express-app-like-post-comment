import express  from "express"; 
const router = express();

import { addComment, deleteComment } from "../controllers/comment";

router.post('/addComment/:commentId&:postId&:userId', addComment);
router.post('/deleteComment', deleteComment);


export default router;