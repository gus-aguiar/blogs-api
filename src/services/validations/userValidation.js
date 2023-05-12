const Joi = require('joi');

const userValidation = (body) => {
  const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });
    const { error, value } = userSchema.validate(body);

  if (error) return { type: 400, message: error.details[0].message };

  return value;
};

// const userValidationTwo = (body) => {
//   const {displayName, email, password, image} = body;
//   if

module.exports = userValidation;
