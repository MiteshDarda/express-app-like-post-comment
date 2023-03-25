

const drop = async(User, Likes, Post, Comment) => {
    try{
        await Likes.drop();
    }
    catch(err){}
    try{
        await Comment.drop();
    }
    catch(err){}
    try{
        await Post.drop();
    }
    catch(err){}
    try{
        await User.drop();
    }
    catch(err){}
}

export default drop;