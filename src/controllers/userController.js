const userService = require('../services/userService');
const userValidation = require('../services/validations/userValidation');

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

module.exports = { create };