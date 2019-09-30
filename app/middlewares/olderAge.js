module.exports = (req, res, next) => {
  if (req.params.age <= 18) {
    return res.redirect('/');
  }

  return next();
};
