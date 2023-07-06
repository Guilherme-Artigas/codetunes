import Joi from 'joi';

const userSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  userEmail: Joi.string().email().required(),
  userPass: Joi.string().min(6).max(10).required(),
  userImg: Joi.string().required()
});

export default userSchema;
