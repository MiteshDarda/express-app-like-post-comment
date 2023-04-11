import express  from "express"; 
const router = express();

import {addUsers, deleteUsers} from "../controllers/user"
import login from "../controllers/login"

router.post('/login', login);
router.post('/signin', addUsers);
router.delete('/users/:id', deleteUsers);

export default router;
