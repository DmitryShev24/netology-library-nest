import * as Joi from 'joi';

const createBookJoi = Joi.object().keys({
  id: Joi.number().positive().required(),
  title: Joi.string().max(15).required(),
  description: Joi.string().max(40).required(),
  authors: Joi.string().optional(),
  favorite: Joi.string().max(20).optional(),
  fileCover: Joi.string().optional(),
  fileName: Joi.string().max(20).optional(),
});

export { createBookJoi };
