const { celebrate, Joi, errors, Segments } = require('celebrate');

export const store = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().error(new Error('Title is a required field!')),
    link: Joi.string().required().error(new Error('Link is a required field!')),
    description: Joi.string().required().error(new Error('Description is a required field!')),
    tags: Joi.array().required().error(new Error('Tags is a required field!')),
  })
},
{
    abortEarly: false
})

export const update = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string(),
    link: Joi.string(),
    description: Joi.string(),
    tags: Joi.array(),
  })
},
{
    abortEarly: false
})