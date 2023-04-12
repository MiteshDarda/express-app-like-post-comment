import express  from "express"; 
const router = express();

import onComment from "../controllers/Comments/onComment";
import onPost from "../controllers/Comments/onPost";
import remove from "../controllers/Comments/remove";
import auth from "../auth/auth";

router.post('/:postId/comment', auth, onPost);
router.post('/:postId/comment/:commentId/comment', auth, onComment);
router.delete('/comment/:commentId', auth, remove);


export default router;