import express  from "express"; 
const router = express();

import {addUsers, deleteUsers} from "../controllers/users"

router.post('/addUser', addUsers);
router.post('/deleteUser', deleteUsers);

export default router;
