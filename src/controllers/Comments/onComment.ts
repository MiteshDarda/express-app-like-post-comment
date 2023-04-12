import {User, Post, Comment, sequelize} from "../../sequelize/test"

const onComment = async(req, res) => {
    const userId = req.userId;
    const commentId = req.params.commentId;
    const postId = req.params.postId;
    console.log(userId, commentId, postId);
    try{
        await sequelize.transaction(async t => {
            const comment = await Comment.findByPk(commentId);
            const user = await User.findByPk(userId);
            const post = await Post.findByPk(postId);

            if(!comment){
                res
                    .status(412)
                    .send("Invalid comment || comment Dosen't Exist");
                return;
            }

            if(Number(postId) !== comment.dataValues.PostId){
                res
                    .status(401)
                    .send("Comment on Wrong Post");
                return;
            }



            const newComment = await user.createComment(req.body);
            await newComment.setComment(comment);
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

export default onComment;
