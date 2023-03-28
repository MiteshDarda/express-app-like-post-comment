'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
      // Comment.belongsTo(User);
      // Comment.belongsTo(Post);
      // Comment.belongsTo(Comment);

      // Comment.hasMany(Comment);
      // Comment.hasMany(Likes);
    }
  }
  Comment.init({
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  console.log("✅Comment")
  return Comment;
};