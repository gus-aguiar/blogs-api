/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const BlogPost = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPost', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    },
    );
    BlogPostsTable.associate = (models) => {
        BlogPostsTable.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };
    
    return BlogPostsTable;
    };
 
  module.exports = BlogPost;