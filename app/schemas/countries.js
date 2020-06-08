const {
  isEmpty,
} = require('ramda');

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

exports.postCountrySchema = {
  country_id: {
    in: ['body'],
    isString: {
      errorMessage: 'The key country_id must be string',
    },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: 'The key country_id must be exist',
    },
    isLength: {
      options: {
        max: 3,
      },
    },
    matches: {
      options: [/^[a-zA-Z]+$/, 'g'],
      errorMessage: 'country_id only supports alphanumeric characters',
    },
  },
  active: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    trim: true,
    errorMessage: 'The key active must be boolean',
  },
  graphics: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (isEmpty(value)) throw new Error('The object with key graphics must be not empty');
        if (typeof value !== 'object') throw new Error('The key graphics must be object');
        return true;
      },
    },
  },
  'graphics.*': {
    in: ['body'],
    custom: {
      options: (value) => {
        if (isEmpty(value)) throw new Error('The object with key graphics must be not empty');
        if (typeof value !== 'object') throw new Error('The key graphics must be object');
        return true;
      },
    },
  },
  'graphics.*.tooltips': {
    in: ['body'],
    custom: {
      options: (value) => {
        if (isEmpty(value)) throw new Error('The object with key graphics must be not empty');
        if (typeof value !== 'object') throw new Error('The key graphics must be object');
        return true;
      },
    },
  },
};
