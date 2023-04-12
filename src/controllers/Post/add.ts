import {User, sequelize} from "../../sequelize/test"

const add = async(req, res) => {
    const userId = req.userId
    try{
        const user = await User.findByPk(userId);
        if (user === null){
            res
                .status(412)
                .send("Invalid UserId || User Dosen't Exist");
            return;
        }
        await sequelize.transaction(async t => {
            await user.createPost(req.body, {transaction : t});
        })
        res
            .status(201)
            .send("✅✅✅ Post Created Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to AddPost ❌❌❌");
    }
}

export default add;