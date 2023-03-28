import {User, Post, Comment, sequelize} from "../sequelize/test"

const addComment = async(req, res) => {
    const commentId = req.params.commentId;
    const postId = req.params.postId;
    const userId = req.params.userId;
    const commentOnComment = req.params.commentId === 'null' ? false : true; // or commentOnPost
    const comment = commentId !== 'null' ? await Comment.findByPk(commentId) : null;
    const post = postId !== 'null' ? await Post.findByPk(postId) : null;
    const user = await User.findByPk(userId);

    if(!comment && !post){
        res
            .status(412)
            .send("Invalid UserId || User Dosen't Exist");
        return;
    }

    try{
        await sequelize.transaction(async t => {
            const newComment = await user.createComment(req.body);
            if(commentOnComment) await newComment.setComment(comment);
            else await newComment.setPost(post); // or commentOnPost
        })
        console.log("✅✅✅ Comment Created Succesfully")
        res
            .status(201)
            .send("✅✅✅ Comment Created Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to AddComment ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to AddComment ❌❌❌");
    }
}

const deleteComment = async(req, res) => {
    const id  = req.params.id;
    try{
        await sequelize.transaction(async t => {
            await Comment.destroy({where: {id: id}}, {transaction: t})
        })
        console.log("✅✅✅ Comment Deleted Succesfully");
        res
            .status(202)
            .send("✅✅✅ Comment Deleted Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to DeleteComment ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to DeleteComment ❌❌❌");
    }
}


export {addComment, deleteComment};