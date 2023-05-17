const { Op } = require('sequelize');
const { Category, User, BlogPost, PostCategory, sequelize } = require('../models');

const findAll = async () => {
  const categories = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ] },
  );
  return categories;
};

const findById = async (id) => {
  const categories = await BlogPost.findByPk(
id,
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ] },
);
  return categories;
};

const create = async (title, content, categoryIds, id) => {
  const validateCategory = await Category
  .findAndCountAll({ where: { id: { [Op.in]: categoryIds } } });
  const { count } = validateCategory;
  if (count !== categoryIds.length) {
    return { error: { code: 400, message: { message: 'one or more "categoryIds" not found' } } };
  }
  const transaction = sequelize.transaction(async (t) => {
  const post = await BlogPost
  .create(
    { title, content, userId: id, published: new Date(), updated: new Date() }, 
    { transaction: t },
);
  await PostCategory.bulkCreate(categoryIds
    .map((categoryId) => ({ postId: post.id, categoryId })), { transaction: t });
  return post; 
});
  return transaction;
};

module.exports = { findAll, findById, create };
