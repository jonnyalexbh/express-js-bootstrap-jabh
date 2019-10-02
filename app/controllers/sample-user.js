const db = require('../models');

exports.sampleCreateUser = async (req, res) => {
  const user = await db.User.create({
    firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email,
  });
  res.status(201).send(user);
};
