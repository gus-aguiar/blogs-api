const postService = require('../services/postService');
const jwt = require('../auth/authFunction');
const userService = require('../services/userService');
const postValidation = require('../services/validations/postValidation');

  const findAll = async (req, res) => {
    const token = req.headers.authorization;
    const validateToken = jwt.verifyToken(token);
    if (validateToken.error) {
        return res.status(validateToken.error.code).json(validateToken.error.message);
    }
    const result = await postService.findAll();
    res.status(200).json(result);
    };

    const findById = async (req, res) => {
        const token = req.headers.authorization;
        const validateToken = jwt.verifyToken(token);
        if (validateToken.error) {
            return res.status(validateToken.error.code).json(validateToken.error.message);
        }
        const { id } = req.params;
        const result = await postService.findById(id);
        if (!result) return res.status(404).json({ message: 'Post does not exist' });
        res.status(200).json(result);
        };
    
const create = async (req, res) => {
    const token = req.headers.authorization;
    const validateToken = jwt.verifyToken(token);
    if (validateToken.error) {
      return res.status(validateToken.error.code).json(validateToken.error.message);
    }
    const { id } = validateToken.data;
    const user = await userService.findById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    const validatedBody = postValidation(req.body);
    if (validatedBody.error) {
      return res.status(validatedBody.error.code).json(validatedBody.error.message);
    }
    const { title, content, categoryIds } = req.body;
    const result = await postService.create(title, content, categoryIds, id);
    if (result.error) return (res.status(result.error.code).json(result.error.message));
    res.status(201).json(result);
};

  module.exports = { findAll, findById, create };