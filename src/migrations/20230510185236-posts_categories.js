'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  await queryInterface.createTable('posts_categories', {
    post_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    }, 
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    },{
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('posts_categories');

  }
};
