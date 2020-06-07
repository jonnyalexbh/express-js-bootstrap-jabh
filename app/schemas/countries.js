exports.getCountrySchema = {
  countryId: {
    in: ['query'],
    exists: {
      errorMessage: 'The countryId field is required.',
    },
    isString: {
      errorMessage: 'The countryId must be a string.',
    },
    notEmpty: {
      errorMessage: 'the countryId must not be empty',
    },
  },
};
