const categoryService = require('../services/categoryService');
const categoryValidation = require('../services/validations/categoryValidation');
const jwt = require('../auth/authFunction');

const create = async (req, res) => {
    const token = req.headers.authorization;
    const validateToken = jwt.verifyToken(token);
    if (validateToken.error) {
      return res.status(validateToken.error.code).json(validateToken.error.message);
    }
    const validatedBody = categoryValidation(req.body);
    if (validatedBody.error) {
      return res.status(validatedBody.error.code).json(validatedBody.error.message);
    }
    const result = await categoryService.create(validatedBody);
    res.status(201).json(result);
  };

  const findAll = async (req, res) => {
    const token = req.headers.authorization;
    const validateToken = jwt.verifyToken(token);
    if (validateToken.error) {
        return res.status(validateToken.error.code).json(validateToken.error.message);
    }
    const result = await categoryService.findAll();
    res.status(200).json(result);
    };
    
  module.exports = { create, findAll };