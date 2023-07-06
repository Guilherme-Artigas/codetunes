import Joi from 'joi';

const loginUserSchema = Joi.object({
  userEmail: Joi.string().email().required(),
  userPass: Joi.string().min(6).max(10).required()
});

export default loginUserSchema;
