"use strict";
// OLD FILES // DEPRECATED WAY OF DOING // NEW WAY WITH MIGRATIONS OR WITH MODELS
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map