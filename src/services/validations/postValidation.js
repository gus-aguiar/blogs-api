const Joi = require('joi');

const postValidation = (body) => {
  const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items().required(),
  });
    const { error, value } = postSchema.validate(body);

  if (error) {
  return { error: { code: 400, message: { message: 'Some required fields are missing' } } };
  }
  return value;
};

module.exports = postValidation;