import express  from "express"; 
const router = express();

import {addUsers, deleteUsers} from "../controllers/user"
// import login from "../controllers/login"

router.post('/signin', addUsers);
router.delete('/users/:id', deleteUsers);
// router.post('./login', login)

export default router;
