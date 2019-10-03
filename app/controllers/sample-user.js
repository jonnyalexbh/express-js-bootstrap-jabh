const db = require('../models');
const logger = require('../logger');

exports.sampleUsers = async (_, res) => {
  const user = await db.User.findAll();
  res.status(200).send(user);
};

exports.sampleShowUser = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error);
  }
};

exports.sampleCreateUser = async (req, res) => {
  const user = await db.User.create({
    firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email,
  });
  res.status(201).send(user);
};
