import express  from "express"; 
const router = express();

import { addPost, deletePost } from "../controllers/post";

router.post('/addPost/:userId', addPost);
router.post('/deletePost', deletePost);


export default router;