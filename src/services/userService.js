const { User } = require('../models');
const jwt = require('../auth/authFunction');

const create = async (body) => {
    const userSearch = await User.findOne({ where: { email: body.email } });
    if (userSearch) {
        return { error: { code: 409, message: { message: 'User already registered' } } }; 
}
    await User.create(body);
    const { id, password, image, ...userWithouthPassword } = body;
    return jwt.createToken(userWithouthPassword);
  };

  const findAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  };

  const findById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) return { error: { code: 404, message: { message: 'User does not exist' } } };
    return user;
  };

module.exports = { create, findAll, findById };