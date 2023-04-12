import express  from "express"; 
const router = express();

import { addLikeDislike} from "../controllers/like";
import auth from "../auth/auth";


router.post('/post/:postId/like', auth, addLikeDislike);
router.post('post/comment/:commentId/like', auth, addLikeDislike);


export default router;