import {User, Post, sequelize} from "../../sequelize/test"


const onPost = async(req, res) => {
    const userId = req.userId;
    const postId = req.params.postId;
    try{
        await sequelize.transaction(async t => {
            const post = await Post.findByPk(postId);
            const user = await User.findByPk(userId);
        
            if(!post){
                res
                    .status(412)
                    .send("Invalid Post || Post Dosen't Exist");
                return;
            }
            const newComment = await user.createComment(req.body);
            await newComment.setPost(post);
        })
        res
            .status(201)
            .send("✅✅✅ Comment Created Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to AddComment ❌❌❌");
    }
}

export default onPost
