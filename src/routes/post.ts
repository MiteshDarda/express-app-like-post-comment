import express  from "express"; 
import add from "../controllers/Post/add";
import remove from "../controllers/Post/remove";
import auth from "../auth/auth"
import get from "../controllers/Post/get";
const router = express();


router.post('/post', auth, add);
router.delete('/post/:id', auth, remove);
router.get('/post/:id', auth, get);
// PUT

export default router;