const { celebrate, Joi, errors, Segments } = require('celebrate');

export default celebrate({
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