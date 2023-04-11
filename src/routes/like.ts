import express  from "express"; 
const router = express();

import { addLikeDislike} from "../controllers/like";
import auth from "../auth/auth";

router.post('/like', auth, addLikeDislike);


export default router;