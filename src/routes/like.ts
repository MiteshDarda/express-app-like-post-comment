import express  from "express"; 
const router = express();

import auth from "../auth/auth";
import likeOnPost from "../controllers/Likes/likeOnPost";
import likeOnComment from "../controllers/Likes/likeOnComment";
import dislikeOnPost from "../controllers/Likes/dislikeOnPost";
import dislikeOnComment from "../controllers/Likes/dislikeOnComment";

router.post('/:postId/like', auth, likeOnPost);
router.post('/:postId/dislike', auth, dislikeOnPost);
router.post('/:postId/comment/:commentId/like', auth, likeOnComment);
router.post('/:postId/comment/:commentId/dislike', auth, dislikeOnComment);


export default router;