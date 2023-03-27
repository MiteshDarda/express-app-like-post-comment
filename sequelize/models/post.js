'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Post.belongsTo(User);

      // Post.hasMany(Comment);
      // Post.hasMany(Likes);
    }
  }
  Post.init({
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  console.log("✅Post")
  return Post;
};