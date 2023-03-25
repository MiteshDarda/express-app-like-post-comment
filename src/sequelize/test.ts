// OLD FILES // DEPRECATED WAY OF DOING // NEW WAY WITH MIGRATIONS

// import sequelize from './index';
import db from "../../sequelize/models/index";
import associate from './associate';
import drop from "./drop";

const test = async() => {   
    try {
        // await sequelize.authenticate();
        await associate(db.User, db.Likes, db.Post, db.Comment);
        await db.sequelize.sync();
        // await drop(db.User, db.Likes, db.Post, db.Comment);
        console.log('✅ Connection has been established successfully.');
        
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        return false;
    }
    return true;
}

export default test;
