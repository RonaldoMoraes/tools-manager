const { celebrate, Joi, errors, Segments } = require('celebrate');

export const store = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().required(),
  })
},
{
    abortEarly: false
})

export const update = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
  })
},
{
    abortEarly: false
})