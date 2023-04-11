import { User, sequelize } from "../sequelize/test";
import userAlreadyExists from "./helpers/userAlreadyExists"
const jwt = require("jsonwebtoken");

const addUsers = async(req, res) => {
    if(!req.body.email || !req.body.firstName || !req.body.password){
        res
            .status(401)
            .send("Body Not Complete");
        return;
    }

    const email = req.body.email.toLowerCase();

    const userPresent = await userAlreadyExists(User, email, sequelize);
    if(userPresent){
        res
            .status(409)
            .send("Email Invalid Or Already Exists");
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
            });
            token = jwt.sign(
                {user_id: newUser.dataValues.id, email: email},
                "SECRET",
                {expiresIn: "24h",}
            )
            newUser.token = token;
            newUser.save();
        })
        console.log("✅✅✅ Users Added Succesfully")
        res
            .status(201)
            .json(token);
    }
    catch(error){
        console.log("WASN'T Able to AddUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to AddUsers ❌❌❌");
    }
}

const deleteUsers = async(req, res) => {
    try{
        await sequelize.transaction(async t => {
                await User.destroy({
                    where: req.params
                }, {transaction: t});
        })
        console.log("✅✅✅ Users Deleted Succesfully");
        res
            .status(202)
            .send("✅✅✅ Users Deleted Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to DeleteUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to DeleteUsers ❌❌❌");
    }
}


export {addUsers, deleteUsers};