/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostsCategory = (sequelize, DataTypes) => {
    const PostsCategoryTable = sequelize.define('PostCategories', {
        post_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
    },
    {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
      });

    return PostsCategoryTable;
    };
 
  module.exports = PostsCategory;