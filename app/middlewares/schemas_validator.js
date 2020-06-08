const { checkSchema, validationResult } = require('express-validator');
const { getCountrySchema, postCountrySchema } = require('../schemas/countries');

const validate = (req, res, next) => {
  const errorMessages = validationResult(req).array();
  if (errorMessages.length > 0) {
    res.send(errorMessages);
  }
  next();
};

exports.getCountryValidation = [checkSchema(getCountrySchema), validate];
exports.postCountryValidation = [checkSchema(postCountrySchema), validate];
