import express  from "express"; 
const router = express();

import { addPost, deletePost } from "../controllers/post";
import auth from "../auth/auth"

router.post('/post', auth, addPost);
router.delete('/post/:id', auth, deletePost);


export default router;