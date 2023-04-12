import express  from "express"; 
import register from "../controllers/Users/register";
import login from "../controllers/Users/login"
import remove from "../controllers/Users/remove"
import auth from "../auth/auth";

const router = express();

router.post('/register', register);
router.post('/login', login);
router.delete('/deactivate',auth, remove);

export default router;
