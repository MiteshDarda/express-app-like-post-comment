
// import { Association } from "sequelize";
// import db from "../../sequelize/models/index";
// const {User, Likes, Post, Comment} = db;

const associate = async(User, Likes, Post, Comment) => {

    await Post.belongsTo(User, { onDelete: 'cascade', hooks: true });
    await User.hasMany(Post, { onDelete: 'cascade', hooks: true });
    
    await Comment.belongsTo(User, { onDelete: 'cascade', hooks: true });
    await User.hasMany(Comment, { onDelete: 'cascade', hooks: true });
    
    await Comment.belongsTo(Comment, { onDelete: 'cascade', hooks: true });
    await Comment.hasMany(Comment, { onDelete: 'cascade', hooks: true });
    
    await Comment.belongsTo(Post, { onDelete: 'cascade', hooks: true });
    await Post.hasMany(Comment, { onDelete: 'cascade', hooks: true });
    
    await Likes.belongsTo(User, { onDelete: 'cascade', hooks: true });
    await User.hasMany(Likes, { onDelete: 'cascade', hooks: true });
    
    await Likes.belongsTo(Comment, { onDelete: 'cascade', hooks: true });
    await Comment.hasMany(Likes, { onDelete: 'cascade', hooks: true });
    
    await Likes.belongsTo(Post, { onDelete: 'cascade', hooks: true });
    await Post.hasMany(Likes, { onDelete: 'cascade', hooks: true });
}

export default associate;