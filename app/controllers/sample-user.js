const db = require('../models');

exports.sampleCreateUser = (req, res) => {
  db.User.create({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email });
  // db.User.create(req.body);
};

