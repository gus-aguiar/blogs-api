const postService = require('../services/postService');
const jwt = require('../auth/authFunction');

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
    
  module.exports = { findAll, findById };