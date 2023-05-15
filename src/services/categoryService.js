const { Category } = require('../models');

  const create = async (body) => {
    const category = await Category.create(body);
    const returnJson = category.toJSON();
    return returnJson;
  };

    const findAll = async () => {
        const categories = await Category.findAll();
        return categories;
    };

module.exports = { create, findAll };