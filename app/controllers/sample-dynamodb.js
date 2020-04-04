const audit = require('../services/dynamodb');

exports.getLogAudit = (req, res, next) => audit
  .getAudit(req.query.id)
  .then((result) => res.send(result))
  .catch(next);

exports.createAudit = (req, res, next) => audit
  .createAudit(req.body)
  .then((result) => res.send(result))
  .catch(next);
