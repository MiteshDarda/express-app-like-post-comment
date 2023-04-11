import { User, sequelize } from "../sequelize/test";
const jwt = require("jsonwebtoken");

const login = async(req, res) => {
    const email = req.body.email.toLowerCase();
    try{
        await sequelize.transaction( async (t) => {
            let user;
            await sequelize.transaction( async (t) => {
                user = await  User.findOne({where: {email: email, password: req.body.password}}, {transaction: t});
            })
            console.log("YES");
            if(user == null){
                res
                .status(400)
                .send("Unable to login");
                return;
            }
            const token = jwt.sign(
                {user_id: user.dataValues.id, email: email},
                "SECRET",
                {expiresIn: "24h",}
            )
            user.token = token;
            user.save();
            res
                .status(200)
                .json(token);
        })
    }
    catch(error){
        res
            .status(400)
            .send("Cant Login");
        return;
    }
}


export default login;