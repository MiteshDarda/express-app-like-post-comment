import express  from "express"; 
import add from "../controllers/Post/add";
import remove from "../controllers/Post/remove";
import auth from "../auth/auth"
const router = express();


router.post('/post', auth, add);
router.delete('/post/:id', auth, remove);


export default router;