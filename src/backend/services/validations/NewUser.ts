import Joi from 'joi';

const userSchema = Joi.object({
  nome: Joi.string().alphanum().min(3).max(30).required(),
  sobrenome: Joi.string().alphanum().min(3).max(30).required(),
  idade: Joi.number().integer().min(12).max(100).required(),
  email: Joi.string().email().required()
});

export default userSchema;
