// OLD FILES // DEPRECATED WAY OF DOING // NEW WAY WITH MIGRATIONS

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres' 
});

export default sequelize;
