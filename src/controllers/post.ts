import {User, Post, sequelize} from "../sequelize/test"

const addPost = async(req, res) => {
    const userId = req.params.userId
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
        console.log("✅✅✅ Post Created Succesfully")
        res
            .status(201)
            .send("✅✅✅ Post Created Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to AddPost ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to AddPost ❌❌❌");
    }
}

const deletePost = async(req, res) => {
    res.send("Deliting");
}


export {addPost, deletePost};