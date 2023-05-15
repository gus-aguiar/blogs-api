const { Category } = require('../models');

  const create = async (body) => {
    const category = await Category.create(body);
    const returnJson = category.toJSON();
    return returnJson;
  };

module.exports = { create };