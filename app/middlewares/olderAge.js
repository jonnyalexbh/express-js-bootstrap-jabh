module.exports = (req, res, next) => {
  if (req.params.age <= 18) {
    res.send(`prohibited to show you are a minor ${req.params.age}`);
  }

  return next();
};
