const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'batatinha';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '10m',
};

const verifyToken = (token) => {
  try {
    if (!token) return { error: { code: 401, message: { message: 'Token not found' } } };
    const validated = jwt.verify(token, process.env.JWT_SECRET);
    return validated;
  } catch (e) {
    return { error: { code: 401, message: { message: 'Expired or invalid token' } } };
  }
};

const createToken = (payload) =>
  jwt.sign({ data: payload }, secret, JWT_CONFIG);

module.exports = { verifyToken, createToken };
