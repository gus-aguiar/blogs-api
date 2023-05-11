/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostsCategory = (sequelize, DataTypes) => {
    const PostsCategoryTable = sequelize.define('PostCategories', {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      
    },
    },
    {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
      });

    return PostsCategoryTable;
    };
 
  module.exports = PostsCategory;