'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // console.log("CONSOLE",Likes, Post, User);
    static associate(models) {
      // User.hasMany(Likes);
      // User.hasMany(Post);
      // User.hasMany(Comment);
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  console.log("✅User")
  return User;
};