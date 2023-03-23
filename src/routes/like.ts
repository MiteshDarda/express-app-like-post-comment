import express  from "express"; 
const router = express();

import { addLikeDislike, updateLikeDislike } from "../controllers/like";

router.post('/addLikeDislike', addLikeDislike);
router.post('/updateLikeDislike', updateLikeDislike);


export default router;