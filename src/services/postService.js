const { Category, User, BlogPost } = require('../models');

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

module.exports = { findAll, findById };
