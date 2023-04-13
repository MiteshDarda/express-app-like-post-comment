import {User, Post, Likes, Comment, sequelize} from "../../sequelize/test"
import { addLike, removeLike, removeDislike } from "../helpers/manuplateLikeDislike";

const likeOnPost = async(req, res) => {
    const userId = req.userId;
    const postId = Number(req.params.postId);
    const actionType = 'l'


    try{
        await sequelize.transaction(async t => {
            const user = await User.findByPk(userId, {transaction: t});
            const post = await Post.findByPk(postId, {transaction: t});

            const registered = await Likes.findOne({ where: { 
                actionOn : 'p',
                UserId : userId,
                CommentId : null,
                PostId : postId
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
                    await removeLike(post);
                }else{ // Update Entry + previous LIKE/DISLIKE
                    registered.actionType = 'l';
                    await registered.save();
                    await removeDislike(post);
                    await addLike(post);
                }
            }
            else{// not registered || no entry || make new entry
                const like = await user.createLike(
                    {
                        actionOn: "p",
                        actionType: actionType,
                    }
                    , {transaction: t}
                )

                await like.setPost(postId, {transaction: t});
                await addLike(post);
                
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

export default likeOnPost;
