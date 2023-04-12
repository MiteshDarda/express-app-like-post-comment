import {Comment, Post, sequelize} from "../../sequelize/test"


const remove = async(req, res) => {
    const commentId  = Number(req.params.commentId);
    const userId = Number(req.userId);
    try{
        await sequelize.transaction(async t => {
            const comment = await Comment.findByPk(commentId);
            const post = await Post.findByPk(comment.dataValues.PostId);
            const commentOwner = comment.dataValues.UserId;
            const postOwner = post.dataValues.UserId;
            if(userId !== commentOwner || userId !== postOwner){
                res
                    .status(401)
                    .send("Not Authorized for this action");
                return;
            }
            await Comment.destroy({where: {id: commentId}}, {transaction: t})
        })
        res
            .status(202)
            .send("✅✅✅ Comment Deleted Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to DeleteComment ❌❌❌");
    }
}

export default remove;
