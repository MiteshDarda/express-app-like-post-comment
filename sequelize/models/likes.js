'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Likes.belongsTo(User);
      // Likes.belongsTo(Post);
      // Likes.belongsTo(Comment);
    }
  }
  Likes.init({
    likeOn: DataTypes.ENUM('p', 'c'),
    likeType: DataTypes.ENUM('l', 'd')
  }, {
    sequelize,
    modelName: 'Likes',
  });
  console.log("✅Likes");
  return Likes;
};