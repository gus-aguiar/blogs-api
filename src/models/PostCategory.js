/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostCategory = (sequelize, DataTypes) => {
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
          as: 'categories',
          through: PostsCategoryTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        })
        models.Category.belongsToMany(models.BlogPost, {
          as: 'posts',
          through: PostsCategoryTable,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        })
      }
    return PostsCategoryTable;
    };
 

module.exports = PostCategory;