/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const BlogPosts = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('blog_posts', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    },
    );
    return BlogPostsTable;
    };
 
  module.exports = BlogPosts;