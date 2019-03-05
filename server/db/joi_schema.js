const Joi = require('joi')

const schema_tips = Joi.object().keys({
    naslov: Joi.string().min(3).max(30).required(),
    jezik: Joi.string().min(1).max(30).required(),
    opis: Joi.string().min(1).required()
})

module.exports = {
    schema_tips
}