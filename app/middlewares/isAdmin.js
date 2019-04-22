module.exports = (req, res, next) => {
  if (req.params.admin === '1') {
    res.send(`you are an administrator your age is ${req.params.age}`);
  }

  return next();
};
