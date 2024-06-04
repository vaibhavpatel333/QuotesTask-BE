const {Joi} = require("express-validation")

const QuotesRequestValidator = Joi.object({
    quoteText: Joi.string().required().messages({
      "any.required": "quoteText is required",
      "string.base": "quoteText must be a string",
      "string.empty": "quoteText cannot be empty",
    }),
    authorName: Joi.string().required().messages({
        "any.required": "authorName is required",
        "string.base": "authorName must be a string",
        "string.empty": "authorName cannot be empty",
      }),
});

module.exports = QuotesRequestValidator