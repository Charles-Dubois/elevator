const Joi = require("joi");
// check the mail and the passord to connect and register
function validAuth(req, res, next) {
  const authConditions = Joi.object({
    email: Joi.string().email().max(50).required(),
    password: Joi.string().max(50).required(),
  });

  const validation = authConditions.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      message: "Error 400 bad request",
      description: validation.error.details[0].message,
    });
  }

  next();
}
const validJoi = { validAuth };
module.exports = validJoi;
