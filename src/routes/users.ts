import express  from "express"; 
const router = express();

import {addUsers, deleteUsers} from "../controllers/user"

router.post('/user', addUsers);
router.delete('/user/:id', deleteUsers);

export default router;
