import { User, sequelize } from "../../sequelize/test";
import userAlreadyExists from "../helpers/userAlreadyExists"
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
    const email = req.body.email.toLowerCase();
    
    // body validation
    if(!req.body.email || !req.body.firstName || !req.body.password){
        res
            .status(401)
            .send("Body Not Complete");
            return;
        }


    const userPresent = await userAlreadyExists(User, email, sequelize);
    
    if(userPresent){
        res
            .status(409)
            .send("User Already Exists");
        return;
    }
    
    try{
        let token;
        await sequelize.transaction( async (t) => {
            const newUser = await User.create({
                email: email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }, {transaction : t});
            token = jwt.sign(
                {user_id: newUser.dataValues.id, email: email},
                "SECRET",
                {expiresIn: "24h",}
            )
            newUser.token = token;
            newUser.save();
        })
        res
            .status(201)
            .json(token);
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to AddUsers ❌❌❌");
    }
}

export default register;