// OLD FILES // DEPRECATED WAY OF DOING // NEW WAY WITH MIGRATIONS

// import sequelize from './index';
import db from "../../sequelize/models/index";
import associate from './associate';
import drop from "./drop";
const User = db.User;
const Likes = db.Likes;
const Post =  db.Post;
const Comment = db.Comment;
const sequelize = db.sequelize;

const test = async() => {   
    try {
        // await sequelize.authenticate();
        await associate(User, Likes, Post, Comment);
        await db.sequelize.sync();
        // await drop(User, Likes, Post, Comment);
        console.log('✅ Connection has been established successfully.');
        
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        return false;
    }
    return true;
}

export  {test, User, Likes, Post, Comment, sequelize};
