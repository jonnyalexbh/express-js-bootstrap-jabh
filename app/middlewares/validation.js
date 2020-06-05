const { query, validationResult } = require('express-validator');

exports.validateCountryId = [query('countryId')
  .exists()
  .withMessage('countryId query param is missing')];

exports.validate = (req, res, next) => {
  const errorMessages = validationResult(req).array();
  if (errorMessages.length > 0) {
    res.send(errorMessages);
  }
  next();
};

exports.validateGetCountry = [
  query('countryId').isEmail().withMessage('query type parameter is missing countryId'),
  (req, res, next) => {
    const errorMessages = validationResult(req).array();
    if (errorMessages.length > 0) {
      res.send(errorMessages);
    }
    next();
  },
];
