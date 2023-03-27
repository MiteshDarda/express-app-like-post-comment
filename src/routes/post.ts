import express  from "express"; 
const router = express();

import { addPost, deletePost } from "../controllers/post";

router.post('/addPost/:userId', addPost);
router.delete('/deletePost', deletePost);


export default router;