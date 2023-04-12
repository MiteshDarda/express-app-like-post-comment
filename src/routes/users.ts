import express  from "express"; 
const router = express();

import remove from "../controllers/Users/remove"
import register from "../controllers/Users/register";
import auth from "../auth/auth";
import login from "../controllers/Users/login"

router.post('/register', register);
router.post('/login', login);
router.delete('/deactivate',auth, remove);

export default router;
