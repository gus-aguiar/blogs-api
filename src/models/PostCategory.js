/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostsCategory = (sequelize, DataTypes) => {
    const PostsCategoryTable = sequelize.define('PostCategory', {
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
      PostsCategoryTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'postId',
          through: PostsCategoryTable,
          foreignKey: 'postId',
        })
        models.Category.belongsToMany(models.BlogPost, {
          as: 'categoryId',
          through: PostsCategoryTable,
          foreignKey: 'categoryId',
        })
      }
    return PostsCategoryTable;
    };
 

module.exports = PostsCategory;