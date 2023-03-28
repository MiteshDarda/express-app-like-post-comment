import {User, Post, Likes, Comment, sequelize} from "../sequelize/test"

const addLike = async(parent) => {
    parent.likes = parent.likes + 1;
    await parent.save();
}

const removeLike = async(parent) => {
    parent.likes = parent.likes - 1;
    await parent.save();
}

const addDislike = async(parent) => {
    parent.dislikes = parent.dislikes + 1;
    await parent.save();
}

const removeDislike = async(parent) => {
    parent.dislikes = parent.dislikes - 1;
    await parent.save();
}

const addLikeDislike = async(req, res) => {
    const {actionOn, actionType, userId, commentId, postId} = req.body;
    if(actionOn !== 'p' && actionOn !== 'c'){
        res
            .status(412)
            .send("Invalid actionOn");
        return;
    }
    if(actionType !== 'l' && actionType !== 'd'){
        res
            .status(412)
            .send("Invalid actionType");
        return;
    }
    try{
        await sequelize.transaction(async t => {
            const user = await User.findByPk(userId, {transaction: t});
            const comment = commentId !== 'null' ? await Comment.findByPk(commentId, {transaction: t}) : null;
            const post = postId !== 'null' ? await Post.findByPk(postId, {transaction: t}) : null;
            console.log(post, comment, user);
            const registered = await Likes.findOne({ where: { 
                actionOn : actionOn,
                UserId : userId,
                CommentId : commentId === 'null' ? null : commentId,
                PostId : postId === 'null' ? null : postId
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
                    if(postId !== 'null'){
                        actionType === 'l' ? await removeLike(post) : await removeDislike(post);
                    }else{
                        actionType === 'l' ? await removeLike(comment) : await removeDislike(comment);
                    }
                }else if(actionType === 'l'){ // Update Entry + previous LIKE/DISLIKE
                    registered.actionType = 'l';
                    await registered.save();
                    if(postId !== 'null'){
                        await removeDislike(post);
                        await addLike(post);
                    }else{
                        await removeDislike(comment);
                        await addLike(comment);
                    }
                }else {
                    registered.actionType = 'd';
                    await registered.save();
                    if(postId !== 'null'){
                        await removeLike(post);
                        await addDislike(post);
                    }else{
                        await removeLike(comment);
                        await addDislike(comment);
                    }
                }
            }
            else{// not registered || no entry || make new entry
                const like = await user.createLike(
                    {
                        actionOn: actionOn,
                        actionType: actionType,
                    }
                    , {transaction: t})
                console.log(postId, commentId, postId !== 'null', commentId !== 'null');
                if(postId !== 'null') {
                    await like.setPost(postId, {transaction: t});
                    if(actionType === 'l') await addLike(post);
                    else await addDislike(post);
                }
                if(commentId !== 'null') {
                    await like.setComment(commentId, {transaction: t});
                    if(actionType === 'l')await addLike(comment);
                    else await addDislike(comment);
                }
            }
        })
        console.log("✅✅✅ addLikeDislike Succesfully");
        res
            .status(202)
            .send("✅✅✅ addLikeDislike Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to addLikeDislike ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to addLikeDislike ❌❌❌");
    }
}

const updateLikeDislike = async(req, res) => {
    res.send("Updating");
}


export {addLikeDislike, updateLikeDislike};