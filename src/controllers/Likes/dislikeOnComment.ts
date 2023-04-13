import {User, Post, Likes, Comment, sequelize} from "../../sequelize/test"
import { addLike, addDislike, removeLike, removeDislike } from "../helpers/manuplateLikeDislike";

const dislikeOnComment = async(req, res) => {
    const userId = req.userId;
    const commentId = Number(req.params.commentId);
    const actionType = 'd'

    try{
        await sequelize.transaction(async t => {
            const user = await User.findByPk(userId, {transaction: t});
            const comment = await Comment.findByPk(commentId, {transaction: t});

            const registered = await Likes.findOne({ where: { 
                actionOn : "c",
                UserId : userId,
                CommentId : commentId,
                PostId : null
            } }, {transaction: t});


            if(registered){
                const prevActionType = registered.dataValues.actionType;

                if(prevActionType === actionType){ // Destroy Entry + previous LIKE/DISLIKE
                    // await registered.destroy();
                    await Likes.destroy({
                        where:{
                            id: registered.id
                        }
                    }, {transaction: t})
                    await removeDislike(comment);
                }else {
                    registered.actionType = 'd';
                    await registered.save();
                    await removeLike(comment);
                    await addDislike(comment);
                    
                }
            }
            else{// not registered || no entry || make new entry
                const like = await user.createLike(
                    {
                        actionOn: 'c',
                        actionType: actionType,
                    }
                    , {transaction: t}
                )

                await like.setComment(commentId, {transaction: t});
                await addDislike(comment);
            }
        })
        res
            .status(202)
            .send("✅✅✅ addLikeDislike Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("WASN'T Able to addLikeDislike ❌❌❌");
    }
}

export default dislikeOnComment;