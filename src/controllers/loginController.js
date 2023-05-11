const loginService = require('../services/loginService');
const { createToken } = require('../auth/authFunction');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }
  const user = await loginService.getByEmail(email);
    if (!user || user.password !== password) {
      return res
        .status(400)
        .json({ message: 'Invalid fields' });
    }
const { password: _password, ...userWithoutPassord } = user.dataValues;
const token = createToken(userWithoutPassord);
res.status(200).json({ token });
};

module.exports = {
    login,
};
