exports.index = (req, res) => {
  res.send({ data: 'show all countries' });
};

exports.show = (req, res) => {
  res.send({ data: `showing country ${req.params.id}` });
};
