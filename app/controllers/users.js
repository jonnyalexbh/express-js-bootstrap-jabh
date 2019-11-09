const servicesUser = require('../services/user');
const { encryptPassword } = require('../helpers');

exports.getUsers = (_, res, next) => servicesUser
  .allUsers()
  .then((users) => res.status(200).send({ users }))
  .catch(next);

exports.getUser = (req, res, next) => servicesUser
  .getUser(req.params)
  .then((user) => res.status(200).send(user))
  .catch(next);

exports.signUp = (req, res, next) => {
  const user = req.body;
  return servicesUser
    .createUser({ ...user, password: encryptPassword(user.password) })
    .then((result) => res.status(201).send(result))
    .catch(next);
};
