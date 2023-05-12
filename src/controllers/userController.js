const userService = require('../services/userService');
const userValidation = require('../services/validations/userValidation');
const jwt = require('../auth/authFunction');

const create = async (req, res) => {
    try {
      const validated = userValidation(req.body);
      if (validated.type) return res.status(validated.type).json({ message: validated.message });
      const result = await userService.create(req.body);
      if (result.error) return res.status(result.error.code).json(result.error.message);
      res.status(201).json({ token: result });
    } catch (error) {
      return res.status(500).json({ message: 'Internal error', error: error.message });
    }
  };

  const findAll = async (req, res) => {
    try {
      const token = req.headers.authorization;
      if (!token) return res.status(401).json({ message: 'Token not found' });
      const decoded = jwt.verifyToken(token);
      if (decoded.error) return res.status(401).json({ message: 'Expired or invalid token' });
      const result = await userService.findAll();
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Error' });
    }
  };

  const findById = async (req, res) => {
    try {
      const { id } = req.params;
      const token = req.headers.authorization;
      if (!token) return res.status(401).json({ message: 'Token not found' });
      const decoded = jwt.verifyToken(token);
      if (decoded.error) return res.status(401).json({ message: 'Expired or invalid token' });
      const result = await userService.findById(id);
      if (result.error) return res.status(result.error.code).json(result.error.message);
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Error' });
    }
  };
module.exports = { create, findAll, findById };