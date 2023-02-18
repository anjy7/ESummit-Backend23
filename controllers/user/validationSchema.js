const Joi = require("joi");

module.exports = {
  fillUserDetailsBodyValidation: (body) => {
    const Schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      regNo: Joi.string().required(),
      mobileNumber: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    });
    return Schema.validate(body);
  },

  hasFilledDetailsBodyValidation: (body) => {
    const schema = Joi.object({
      token: Joi.string().required(),
      email: Joi.string().email().required(),
    });
    return schema.validate(body);
  },

  joinTeamViaTokenBodyValidation: (body) => {
    const Schema = Joi.object({
      token: Joi.string().required(),
    });
    return Schema.validate(body);
  },

  joinTeamViaTokenBodyValidation: (body) => {
    const Schema = Joi.object({
      eventCode: Joi.number().min(0).max(1),
      op: Joi.number().min(0).max(1),
    });
    return Schema.validate(body);
  },

  updateRequestBodyValidation: (body) => {
    const Schema = Joi.object({
      status: Joi.number().min(0).max(1),
    });
    return Schema.validate(body);
  },
};