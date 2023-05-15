const Joi = require('joi');

const categoryValidation = (body) => {
  const categorySchema = Joi.object({
    name: Joi.string().required(),
  });
const { error, value } = categorySchema.validate(body);
if (error) return { error: { code: 400, message: { message: error.details[0].message } } };
return value;
};

module.exports = categoryValidation;