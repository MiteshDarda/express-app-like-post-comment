import { User, sequelize } from "../../sequelize/test";
import userAlreadyExists from "../helpers/userAlreadyExists"
const jwt = require("jsonwebtoken");

const remove = async(req, res) => {
    try{
        await sequelize.transaction(async t => {
                await User.destroy({
                    where: {id: req.userId}
                }, {transaction: t});
        })
        res
            .status(202)
            .send("✅✅✅ Users Deleted Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to DeleteUsers ❌❌❌");
    }
}


export default remove;