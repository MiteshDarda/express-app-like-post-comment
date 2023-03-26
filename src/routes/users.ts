import express  from "express"; 
const router = express();

import {addUsers, deleteUsers} from "../controllers/users"

router.post('/addUser', addUsers);
router.delete('/deleteUser', deleteUsers);

export default router;
